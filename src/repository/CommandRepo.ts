import { Command } from "../";

class CommandRepository {
    static instance: CommandRepository;
    data: Command[];

    constructor(){
        if (CommandRepository.instance) throw new Error("Singleton cannot be instanced more than once")
        this.data = [];
        CommandRepository.instance = this;
        return CommandRepository.instance;
    }

    findByName(name: string): Command | undefined{
        const command = this.data.find(command => command.commandName === name)
        return command ? command : this.data.find(command => command.commandName === 'error')
    }

    addCommand(command : Command) { this.data.push(command); }
    size() { return this.data.length }
}

const COMMAND_REPO = new CommandRepository();
Object.freeze(COMMAND_REPO);

export {COMMAND_REPO};