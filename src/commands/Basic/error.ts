import { CommandInteraction, Message } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class Error extends Command {
    constructor(client : LithiumClient) {
        super("error", client)
    }

    async run(commandContext : CommandInteraction | Message) {
        await commandContext.reply('Invalid command')
    }
}