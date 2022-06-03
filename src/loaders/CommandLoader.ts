import { Loader, Command, FileUtils, COMMAND_REPO } from "../"
import { LithiumClient } from "../Lithium";

export class CommandLoader extends Loader {
    commands : []

    constructor(client : LithiumClient) {
        super({
            preload: true
        }, client)

        this.commands = [];
    } 

    async load() {  
        try {
            await this.initCommands()
            return true
        }
        catch (err) {
            console.log(err);
        }
        return false
    }

    initCommands(dirPath = 'src/commands') {
        return FileUtils.readFiles(dirPath, (NewCommand) => {
            if (Object.getPrototypeOf(NewCommand) !== Command) return;
            COMMAND_REPO.addCommand(new NewCommand(this.client))
        }, (e) => {console.log(e);})
    }
}