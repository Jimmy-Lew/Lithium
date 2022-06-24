import { CommandInteraction, MessageEmbed } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'

export default class Server extends Command {
    constructor(client : LithiumClient) {
        super("server", client)
    }

    async run(interaction : CommandInteraction) {
        const embed = new MessageEmbed()
        .setColor("#663ab7")
        .setTitle("Server Stats")
        .setDescription("Server information & stats")
        .addFields(
            { name: 'Server Name', value: `${interaction.guild?.name}`, inline: true },
            { name: 'Total members', value: `${interaction.guild?.memberCount}`, inline: true },
            { name: 'Server ID', value: `${interaction.guildId}`, inline: true },
        );

        await interaction.reply({embeds: [embed]});
    }
}