import { Loader, EventListener, FileUtils, LISTENER_REPO } from "../"
import { LithiumClient } from "../Lithium";

export class ListenerLoader extends Loader {
    constructor(client : LithiumClient) {
        super({
            preload: true
        }, client)
    } 

    async load(): Promise<boolean> {
        try {
            await this.initListeners()
            return true
        }
        catch (err) {
            console.log(err);
        }
        return false
    }

    initListeners({ dirPath = 'src/listeners' }: { dirPath?: string; } = {}): Promise<any> {
        return FileUtils.readFiles(dirPath, (NewListener) => {
            if (Object.getPrototypeOf(NewListener) !== EventListener) return
            this.addListener(new NewListener(this.client));
        }, (err) => console.error(err))
    }

    addListener(listener : EventListener): void {
        this.client.on(listener.event, listener.run)
        LISTENER_REPO.addListener(listener)
    }   
}