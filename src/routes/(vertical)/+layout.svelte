<script>
    import "$lib/app.css"
    import { onMount } from "svelte"
    import { onNavigate } from "$app/navigation"
    import { classToggle } from "$lib/utils"

    import Header from "$lib/components/Header.svelte"

    onNavigate(async (navigation) => {
        if (!document.startViewTransition) return

        return new Promise(resolve => {
            document.startViewTransition(async () => {
                resolve()
                await navigation.complete
            })
        })
    })

    function toggleMenu() {
        const nav = document.querySelector('.menu-container')
        if (nav) {
            classToggle(nav, "show")
        }
    }
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" integrity="sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<Header class="header-white-gradient backdrop-blur-sm">
    <button on:click={toggleMenu} type="button" class="md:hidden text-tulip-tree-400 outline-none hover:bg-tulip-tree-400 focus:bg-tulip-tree-400 hover:text-slate-900 focus:text-slate-900 transition-colors p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        <span class="sr-only">Toggle menu</span>
    </button>
</Header>

<main>
    <slot />
</main>

<style>
    :global(.header-white-gradient) {
        background: linear-gradient(to bottom, rgb(255 255 255 / 0.5) 50%, transparent 100%);
    }

    @media (min-width: 768px) {
        :global(.header-white-gradient) {
            background: linear-gradient(to right, rgb(255 255 255 / 0.5) 50%, transparent 100%);
        }
    }
</style>