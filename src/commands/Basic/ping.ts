import { CommandInteraction, Message } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class PingPong extends Command {
    constructor(client : LithiumClient) {
        super("ping", client)
    }

    async run(commandContext : CommandInteraction | Message) {
        await commandContext.reply('Pong!')
    }
}