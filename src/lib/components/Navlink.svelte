<script>
    export let href = '/'
    export let text = 'Link'
    export let disabled = false
</script>

{#if disabled}
    <span class="menu-link-disabled flex items-center gap-2 max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2">
        <div class="text-slate-700 dark:text-slate-500 line-through">{ text }</div>
        <div class="text-xs leading-none bg-tulip-tree-400 rounded-full overflow-hidden px-2 py-1">Soon</div>
    </span>
{:else}
    <a {href} {...$$restProps} class="menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2">
        { text }
    </a>
{/if}
