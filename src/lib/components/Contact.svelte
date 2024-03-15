<script>
    export let name = 'contact'
    export let text = 'Contact'
    export let href = '#'
</script>

<li class="contact {name} w-[min-content] group flex items-center gap-2">
    <slot name="icon" />
    <a {href} class="contact-link text-tulip-tree-400 outline-none hover:underline focus:underline">
        {text}
    </a>
    <button type="button" class="contact-copy opacity-0 pointer-events-none outline-none hover:text-malibu-500 focus:text-malibu-500 group-hover:opacity-100 group-hover:pointer-events-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <span class="sr-only">Copy</span>
    </button>
</li>
