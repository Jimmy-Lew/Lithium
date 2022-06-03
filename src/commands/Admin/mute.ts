import { CommandInteraction } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class Mute extends Command {
    constructor(client : LithiumClient) {
        super("mute", client)
    }

    async run(interaction : CommandInteraction) {
        if (interaction.user.id !== "414431726211694593") return await interaction.reply("Invalid user!")

        const member = interaction.options.getMember('target');
        const role = await interaction.guild?.roles.fetch("976203768569921557")
        // @ts-ignore
        member.roles?.add(role);
        // @ts-ignore
        await interaction.reply(`Successfully added ${role} to ${member?.user.username}`)
    }
}