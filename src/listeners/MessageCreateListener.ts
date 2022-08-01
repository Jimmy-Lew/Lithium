import { Message } from "discord.js";
import { COMMAND_HANDLER, EventListener } from '../';
import { LithiumClient } from "../Lithium";

export default class MessageCreateListener extends EventListener {
    [x: string]: any;
    constructor(client : LithiumClient){
        super({
            event: 'messageCreate'
        }, 2, client);
    }

    async run( message : Message) { 
        const { content, guild, member, createdAt, embeds } = message
        const hasPrefix = content.charAt(0) === this.PREFIX
        const hasEmbed = embeds.length > 0 ? true : false;

        if (hasPrefix) {
            const commandName = content.substring(1, content.indexOf(' '));
            console.log(commandName);
            COMMAND_HANDLER.setCommand(commandName).execute(message)
            return
        }

        let log = (content: string) => console.log(`${createdAt.toLocaleTimeString()} - Message in ${guild?.name} from ${member?.nickname ? member.nickname : member?.user.username}: ${content}`)
        log(hasEmbed ? "Embed Message" : content)
    }

}