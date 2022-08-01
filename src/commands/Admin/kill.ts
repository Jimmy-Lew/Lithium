import { CommandInteraction } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class Kill extends Command {
    constructor(client : LithiumClient) {
        super("litexit", client)
    }

    async run(interaction : CommandInteraction) {
        if (interaction.user.id !== "414431726211694593") return await interaction.reply("Invalid user!")

        await interaction.reply("Killing bot...")
        process.exit(1)
    }
}