export namespace Lithium {
    interface LoaderOptions {
        preload: boolean;
    }

    interface ClientOptions {
        intents: any[]
    }

    interface EventListenerOptions {
        event: string
    }

    interface FileObject {
        [key: string] : any;
    }
}