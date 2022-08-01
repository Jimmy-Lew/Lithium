import { EventListener } from "../";
import { LithiumClient } from "../Lithium";

export default class ReadyListener extends EventListener {
    constructor(client : LithiumClient){
        super({
            event: 'ready'
        }, 1, client);
    }

    run() {
        // @ts-ignore
        this.user?.setPresence({
            status: "online",
            activities: [{
                name: "Listening to events...",
                type: 1
            }]
        })
    }
}