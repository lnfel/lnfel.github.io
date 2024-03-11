<script>
    import { base } from "$app/paths"
    import { blogLinks } from "$lib/utils/navigation"
    
    import Navlink from "$lib/components/Navlink.svelte"
</script>

<div class="fixed inset-0 md:static md:block w-screen shrink-0 flex items-center z-10">
    <nav class="menu w-full h-full hidden md:block self-stretch pt-20 md:pt-0">
        <div class="h-full flex flex-col gap-2 px-4 py-6 md:p-20 md:pl-[12rem]">
            {#each blogLinks as { text, href }}
                <Navlink href="{base}{href}" {text} />
            {/each}
        </div>
    </nav>
</div>

<section id="blog" class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">

</section>
