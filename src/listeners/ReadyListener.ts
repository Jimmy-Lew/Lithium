import { EventListener } from "../";
import { LithiumClient } from "../Lithium";

export default class ReadyListener extends EventListener {
    constructor(client : LithiumClient){
        super({
            event: 'ready'
        }, 1, client);
    }

    run() { console.log("Bot Ready!"); }
}