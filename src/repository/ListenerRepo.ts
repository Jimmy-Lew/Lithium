import { EventListener } from "../";

class ListenerRepository {
    static instance: ListenerRepository;
    data: EventListener[];

    constructor(){
        if (ListenerRepository.instance) throw new Error("Singleton cannot be instanced more than once")
        this.data = [];
        ListenerRepository.instance = this;
        return ListenerRepository.instance;
    }

    findById(id: number): EventListener | undefined {
        return this.data.find(listener => listener.id === id);
    }

    addListener(listener : EventListener) { this.data.push(listener); }
    size() { return this.data.length }
}

const LISTENER_REPO = new ListenerRepository();
Object.freeze(LISTENER_REPO);

export {LISTENER_REPO};