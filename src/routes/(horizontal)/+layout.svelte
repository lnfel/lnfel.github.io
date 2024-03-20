<script>
    import "$lib/app.css"
    import 'photoswipe/style.css'

    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import PhotoSwipeLightbox from 'photoswipe/lightbox'

    import { classToggle } from "$lib/utils"
    import { normalizeWheel } from "$lib/utils/dom"
    import { classList } from "$lib/action"

    import Header from "$lib/components/Header.svelte"
    import LamyDebugbar from "lamy-debugbar"
    
    function toggleMenu() {
        const nav = document.querySelector('.menu-container')
        if (nav) {
            classToggle(nav, "show")
        }
    }

    /**
     * @param {any} value
     */
    function updateDebugValues(value) {
        debug = value
    }

    onMount(async () => {
        const main = document.querySelector('main')
        const projects = document.querySelector('#projects')
        const parallax = document.querySelector('#parallax')

        const lightbox = new PhotoSwipeLightbox({
            gallery: '.project-grid',
            children: '.project-card',
            pswpModule: () => import('photoswipe')
        })

        lightbox.init()

        if (parallax instanceof HTMLElement && main instanceof HTMLElement && projects instanceof HTMLElement) {
            main.onwheel = event => {
                // if (main.scrollLeft === projects.offsetLeft && event.deltaY > 0 && parallax.dataset.percentage !== '-100' || main.scrollLeft === projects.offsetLeft && event.deltaY < 0 && parallax.dataset.percentage !== '0') {
                    // event.preventDefault()
                    // event.stopPropagation()
                    // const normalizedWheel = normalizeWheel(/** @type {WheelEvent & import('$lib/utils/dom').LegacyWheelEvent} */ (event))
                    
                    // parallax.dataset.scrolledAmount = (Number(parallax.dataset.scrolledAmount) + normalizedWheel.pixelY).toString()
                    // const wheelDelta = Number(parallax.dataset.scrolledAmount)
                    // const maxDelta = parallax.getBoundingClientRect().width / 2
                    // if (wheelDelta < 0) parallax.dataset.scrolledAmount = '0';
                    // if (wheelDelta >= maxDelta) parallax.dataset.scrolledAmount = maxDelta.toString();
                    // const percentage = Math.min(Math.max((wheelDelta / maxDelta) * -100, -100), 0)

                    // parallax.dataset.percentage = percentage.toString()
                    
                    // if (wheelDelta < maxDelta) {
                    //     const parallaxCardImages = /** @type {NodeListOf<HTMLImageElement>} */ (parallax.querySelectorAll('.parallax-card-img'))
                    //     parallaxCardImages.forEach((image) => {
                    //         image.animate({
                    //             objectPosition: `${percentage + 100}% center`
                    //         }, { duration: 1200, fill: "forwards" })
                    //     })
                    // }

                    // parallax.animate({
                    //     transformOrigin: 'center',
                    //     left: `${Math.abs(percentage)}%`,
                    //     transform: `translate(${percentage}%, 0% )`
                    // }, { duration: 1200, fill: "forwards" })

                    // updateDebugValues({
                    //     scroll: {
                    //         wheelDelta,
                    //         maxDelta,
                    //         percentage,
                    //         dataPercentage: parallax.dataset.percentage,
                    //         deltaY: event.deltaY,
                    //         scrollingUp: event.deltaY > 0,
                    //         scrollingDown: event.deltaY < 0
                    //     }
                    // })
                // } else {
                    // const mediumScreen = window.matchMedia("(min-width: 768px)")
                    // event.preventDefault()
                    // mediumScreen.matches
                    //     ? main.scrollLeft += event.deltaY
                    //     : main.scrollTop += event.deltaY
                // }
            }

            // parallax.onmousedown = event => {
            //     parallax.dataset.mouseDownAt = event.clientX.toString()
            // }

            // parallax.onmousemove = event => {
            //     if (parallax.dataset.mouseDownAt === "0") return

            //     const mouseDelta = parseFloat(parallax.dataset?.mouseDownAt ?? '0') - event.clientX
            //     const maxDelta = window.innerWidth / 2
            //     const percentage = (mouseDelta / maxDelta) * -100
            //     const nextPercentage = Math.min(Math.max(parseFloat(parallax.dataset?.prevPercentage ?? '0') + percentage, -100), 0)

            //     parallax.dataset.percentage = nextPercentage.toString()

            //     parallax.animate({
            //         transformOrigin: 'center',
            //         left: `${Math.abs(nextPercentage)}%`,
            //         transform: `translate(${nextPercentage}%, 0% )`
            //     }, { duration: 1200, fill: "forwards" })

            //     const parallaxCardImages = /** @type {NodeListOf<HTMLImageElement>} */ (parallax.querySelectorAll('.parallax-card-img'))
            //     parallaxCardImages.forEach((image) => {
            //         image.animate({
            //             objectPosition: `${nextPercentage + 100}% center`
            //         }, { duration: 1200, fill: "forwards" })
            //     })
            // }

            // parallax.onmouseup = () => {
            //     parallax.dataset.mouseDownAt = "0"
            //     parallax.dataset.prevPercentage = parallax.dataset.percentage
            // }
        }
    })

    $: debug = {
        scroll: {

        },
        page: $page
    }
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" integrity="sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<svelte:body use:classList={"bg-indigo-50 dark:bg-slate-900 scroll-smooth"}/>

<Header class="bg-slate-900/50">
    <button on:click={toggleMenu} type="button" class="md:hidden text-tulip-tree-400 outline-none hover:bg-tulip-tree-400 focus:bg-tulip-tree-400 hover:text-slate-900 focus:text-slate-900 transition-colors p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        <span class="sr-only">Toggle menu</span>
    </button>
</Header>

<!-- overflow-hidden is needed when scrolling with native scroll -->
<main data-scrolled-amount="0" data-percentage="0" class="relative w-[max-content] h-screen md:static md:flex md:items-stretch md:h-full will-change-scroll">
    <slot />
</main>

<!-- <LamyDebugbar data={debug} open /> -->

<style lang="postcss">
    /* main {
        view-transition-name: main;
    } */
    :global(body) {
        scroll-behavior: smooth;
        background-color: theme(colors.indigo.50);
    }
    :global(.lamy-debugbar) {
        /* position: fixed;
        bottom: 0;
        left: 0;
        z-index: 50;
        width: 100vw; */
        /* opacity: 0.1; */
        transition: 300ms ease-in-out all;
    }
    :global(.lamy-debugbar:hover),
    :global(.lamy-debugbar:has(button:focus)) {
        opacity: 1;
    }
    @media (min-width: 768px) {
        :global(body) {
            overflow: hidden;
        }
    }
    @media (prefers-color-scheme: dark) {
        :global(body) {
            @apply dark:text-white dark:bg-slate-900;
        }
    }
</style>