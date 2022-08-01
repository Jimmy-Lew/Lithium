import { CommandInteraction } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class ClearChat extends Command {
    constructor(client : LithiumClient) {
        super("cc", client)
    }

    async run(interaction : CommandInteraction) {
        if (interaction.user.id !== "414431726211694593") return await interaction.reply("Invalid user!")

        const range = interaction.options.getInteger('range');

        // @ts-ignore
        member.roles?.add(role);
        // @ts-ignore
        await interaction.reply(`Successfully added ${role} to ${member?.user.username}`)
    }
}