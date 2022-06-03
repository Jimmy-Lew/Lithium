import { LithiumClient } from "../Lithium";


export class Command {
    commandName: String;
    client: LithiumClient;
    
    constructor(commandName : String, client : LithiumClient) {
        this.commandName = commandName;
        this.client = client;
    }

    async run(..._args: any[]) { throw new Error("Implement method run()") }
}