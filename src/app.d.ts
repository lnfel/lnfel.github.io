// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
        interface PageState {
            hash?: string
            pathname?: string
        }

        type Project = {
            title: string
            description: string
            imageURL: string
            alt: string
            pageURL: string
            externalURL: string
            internalLinkLabel: string
            externalLinkLabel: string
        }

        type GenericList = {
            name: string
            bgColor: string
            textColor?: string
        }
	}
    
    declare function loadPyodide(options?: Parameters<typeof import('pyodide').loadPyodide>): Promise<import('pyodide').PyodideInterface>
}

export {};
