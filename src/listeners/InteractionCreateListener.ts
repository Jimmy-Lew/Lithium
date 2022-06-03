import { Interaction } from "discord.js";
import { EventListener, COMMAND_HANDLER } from "../";
import { LithiumClient } from "../Lithium";

export default class InteractionCreateListener extends EventListener {
    constructor(client : LithiumClient){
        super({
            event: 'interactionCreate'
        }, 3, client);
    }

    run(interaction : Interaction) {
        if (interaction.isCommand()) {
            const { commandName } = interaction
            COMMAND_HANDLER.setCommand(commandName).execute(interaction)
        }
        return
    }
}