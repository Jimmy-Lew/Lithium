import { CommandInteraction, Message } from "discord.js";
import { Command, COMMAND_REPO } from "../";

class CommandHandler {
    static instance : CommandHandler;
    command! : Command | null;

    constructor() {
        if (CommandHandler.instance) throw new Error("Singleton cannoted be instanced more than once")
        this.command = null;
        CommandHandler.instance = this;
        return CommandHandler.instance;
    }

    setCommand(commandName : string) {
        const command = COMMAND_REPO.findByName(commandName)
        if (command === undefined) return this
        this.command = command;
        return this;
    }

    execute(params : CommandInteraction | Message){
        return this.command?.run(params);
    }
}

const COMMAND_HANDLER = new CommandHandler();
Object.seal(COMMAND_HANDLER)

export {COMMAND_HANDLER}