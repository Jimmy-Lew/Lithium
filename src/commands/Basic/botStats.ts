import { CommandInteraction, MessageEmbed } from 'discord.js'
import { Command } from '../..'
import { LithiumClient } from '../../Lithium'
import * as os from 'os'

export default class BotStats extends Command {
    constructor(client : LithiumClient) {
        super("lithium", client)
    }

    async run(interaction : CommandInteraction) {
        const totalRam = ((os.totalmem() / 10**9 + " ").split('.')[0]);
        const freeRam = ((os.freemem() / 10**9 + " ").split('.')[0]);
        const usedRam = (((os.totalmem() - os.freemem()) / 10**9 + " ").split('.')[0]);
        const prctFreeRam = (((os.freemem() * 100) / os.totalmem() + " ").split('.')[0]);

        const TotalUpTime = os.uptime();
        const upTimeMins = Math.round(TotalUpTime%3600/60)
        const upTimeHours = Math.round(TotalUpTime/3600)

        const { model, speed } = os.cpus()[0];

        const BotStatsEmbed = new MessageEmbed()
        .setColor("#4050b5")
        .setTitle("Bot Stats")
        .setDescription("Bot system stats")
        .addFields(
            { name: 'Memory (RAM)', value: `Total Memory: ${totalRam}GB\nUsed Memory: ${usedRam}GB\nFree Memory: ${freeRam}GB\nPercentage Of Free Memory: ${prctFreeRam}%`, inline: true},
            { name: 'CPUs', value: `Model: ${model}\nSpeed: ${speed}MHz`, inline: true },
            { name: 'Uptime', value: `${upTimeHours}hour(s) ${upTimeMins}minute(s)`, inline: false }
        )

        const ServerStatsEmbed = new MessageEmbed()
        .setColor("#663ab7")
        .setTitle("Server Stats")
        .setDescription("Server information & stats")
        .addFields(
            { name: 'Server Name', value: `${interaction.guild?.name}`, inline: true },
            { name: 'Total members', value: `${interaction.guild?.memberCount}`, inline: true },
            { name: 'Server ID', value: `${interaction.guildId}`, inline: true },
        )
        .setTimestamp()
        .setFooter({
            text: `\u2800`,
            iconURL: interaction.user.displayAvatarURL({ dynamic: true })
        })


        await interaction.reply({embeds: [BotStatsEmbed, ServerStatsEmbed]});
    }
}