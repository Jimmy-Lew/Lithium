import { LithiumClient } from "../Lithium";
import { Lithium } from "../types";

export class Loader {
    client: LithiumClient;
    preload: boolean;
    commands: any;

    constructor(options : Lithium.LoaderOptions, client : LithiumClient) {
        this.client = client;

        this.preload = "preload" in options ? options.preload : false;
    }

    async load() {
        return true
    }
}