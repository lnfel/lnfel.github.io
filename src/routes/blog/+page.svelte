<script>
    import Navlink from "$lib/components/Navlink.svelte"
    import { blogLinks } from "$lib/utils/navigation"
</script>

<div class="w-screen shrink-0 flex items-center">
    <div class="md:w-[7rem]"></div>

    <nav class="menu w-full self-stretch">
        <div class="h-full hidden md:flex flex-col gap-2 p-20">
            {#each blogLinks as { text, href }}
                <Navlink {href} {text} />
            {/each}
        </div>
    </nav>
</div>

<section id="blog" class="w-screen h-full shrink-0 flex">

</section>
