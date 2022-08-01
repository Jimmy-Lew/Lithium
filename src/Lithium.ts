import * as Loaders from './loaders'
import { Client } from 'discord.js'
import { Loader, partitionArray } from './';
import { Lithium } from './types';

export class LithiumClient extends Client {
    loaded: boolean
    PREFIX: string

    constructor (options : Lithium.ClientOptions) {
       super(options) 
       this.loaded = false
       this.PREFIX = process.env.PREFIX!;
    }

    async initialize () {
        const LOADERS = Object.values(Loaders).map(L => new L(this))
        const [preload, normal] = partitionArray(LOADERS, (loader) => {return loader.preload})

        for (const loader of preload) {
            await this.initializeLoader(loader)
        }

        await this.login()

        for (const loader of normal) {
            await this.initializeLoader(loader)
        }

        this.loaded = true
    }

    login (token = process.env.TOKEN) {
        return super.login(token)
    }

    async initializeLoader(loader : Loader) {
        let success = false
        try {
            success = await loader.load()
        }
        catch (e) {
            console.log(e);
        }
        finally {
            if (!success) { 
                console.log("Failed to load in modules! Terminating...");
                process.exit(1)
            }
        }
    }
}