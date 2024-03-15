<script>
	import { browser } from "$app/environment"
    import { page } from "$app/stores"

    let promise = new Promise(() => {})

    if (browser) {
        promise = fetch('/img/ui/suisei-not-found.svg').then(async (response) => await response.text())
    }
</script>

<section class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-6 space-y-4">
        <h1 class="font-zenless-title text-4xl md:text-5xl py-2">{$page.status}: {$page.error?.message}</h1>
        <p class="font-zenless-copy text-2xl text-pretty">The site renovation is still in progress and some links are unfortunately broken at the moment. <a href="/" class="text-tulip-tree-400 outline-none hover:underline focus:underline">Take me home</a></p>
        <div class="w-full flex items-center justify-center text-tulip-tree-300">
            {#await promise then image}
                {@html image}
            {/await}
        </div>
    </div>
</section>
