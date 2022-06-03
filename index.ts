import { Intents } from 'discord.js';
import { LithiumClient } from './src/Lithium';
import dotenv from 'dotenv';
dotenv.config();

const CLIENT_OPTIONS = {
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
}

const CLIENT = new LithiumClient(CLIENT_OPTIONS);

CLIENT.initialize()