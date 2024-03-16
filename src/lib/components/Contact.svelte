<script>
    import { copyTextFromElement } from "$lib/utils"

    export let name = 'contact'
    export let text = 'Contact'
    export let href = '#'

    let copied = false
    /** @type {NodeJS.Timeout | undefined} */
    let timeout

    /**
     * @type {(event: MouseEvent) => void}
     */
    function copy(event) {
        if (timeout) {
            clearTimeout(timeout)
        }
        const button = event.target
        console.log(button)
        if (button instanceof HTMLButtonElement) {
            const parent = button.parentNode
            console.log(parent)
            if (parent) {
                copyTextFromElement(/** @type {HTMLElement} */ (parent.querySelector('a')))
                copied = true
                timeout = setTimeout(() => {
                    copied = false
                }, 1000)
            }
        }
    }
</script>

<li class="contact {name} relative md:w-[min-content] group flex items-center justify-between md:justify-start gap-2 before:content-[''] before:w-full before:absolute before:top-[50%] before:translate-y-[-50%] before:z-[-1] before:border-t-2 before:border-white before:border-dotted md:before:hidden">
    <div class="flex items-center gap-2 bg-slate-900 pr-2 md:pr-0">
        <slot name="icon" />
        <a {href} class="contact-link text-tulip-tree-400 outline-none hover:underline focus:underline">
            {text}
        </a>
    </div>
    <button on:click={copy} type="button" class="contact-copy flex items-center justify-center bg-slate-900 md:opacity-0 pointer-events-none px-2 md:px-0 outline-none hover:text-malibu-500 focus:text-malibu-500 group-hover:opacity-100 group-hover:pointer-events-auto">
        {#if copied}
            <span class="text-xs">Copied!</span>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy w-4 h-4 md:w-6 md:h-6 pointer-events-none"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
        <span class="sr-only">Copy</span>
    </button>
</li>
