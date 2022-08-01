import { LithiumClient } from "../Lithium";
import { Lithium } from "../types";

export class EventListener{
    client: LithiumClient;
    event: string;
    id: number;

    constructor (options : Lithium.EventListenerOptions, id: number, client : LithiumClient) {
        this.event = options.event;
        this.client = client;
        this.id = id;
    }

    run(...args: any[]) {}
}