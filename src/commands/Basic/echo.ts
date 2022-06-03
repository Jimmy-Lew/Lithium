import { Message } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class Echo extends Command {
    constructor(client : LithiumClient) {
        super("echo", client)
    }

    async run(commandContext : Message) {
        const { content, guild, member, createdAt } = commandContext
        const log = `
\`\`\`
ECHO | ${createdAt.toLocaleTimeString()}
Server: ${guild?.name}
Author: ${member?.nickname ? member.nickname : member?.user.username}
        
Content: ${content.substring(content.indexOf(' ') + 1)}\`\`\``
        if (member?.user.id !== "975943333241290752") await commandContext.reply(log)
    }
}