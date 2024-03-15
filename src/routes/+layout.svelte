<script>
    import "$lib/app.css"
    import { onMount } from "svelte"
    import { page } from "$app/stores"

    import { classToggle } from "$lib/utils"
    import { decryptAnimation } from "$lib/utils"
    import { normalizeWheel } from "$lib/utils/dom"

    import Header from "$lib/components/Header.svelte"
    import LamyDebugbar from "lamy-debugbar"
    
    function toggleMenu() {
        const nav = document.querySelector('nav.menu')
        if (nav) {
            classToggle(nav, "hidden")
        }
    }

    /**
     * @param {any} value
     */
    function updateDebugValues(value) {
        debug = value
    }

    onMount(async () => {
        decryptAnimation({ target: '.menu-link' })

        const main = document.querySelector('main')
        const projects = document.querySelector('#projects')
        const parallax = document.querySelector('#parallax')

        if (parallax instanceof HTMLElement && main instanceof HTMLElement && projects instanceof HTMLElement) {
            parallax.onwheel = event => {
                if (main.scrollLeft === projects.offsetLeft) {
                    event.preventDefault()
                    event.stopPropagation()
                    const normalizedWheel = normalizeWheel(/** @type {WheelEvent & import('$lib/utils/dom').LegacyWheelEvent} */ (event))
                    
                    parallax.dataset.scrolledAmount = (Number(parallax.dataset.scrolledAmount) + normalizedWheel.pixelY).toString()
                    const wheelDelta = Number(parallax.dataset.scrolledAmount)
                    const maxDelta = parallax.getBoundingClientRect().width / 2
                    if (wheelDelta < 0) parallax.dataset.scrolledAmount = '0';
                    if (wheelDelta >= maxDelta) parallax.dataset.scrolledAmount = maxDelta.toString();
                    const percentage = Math.min(Math.max((wheelDelta / maxDelta) * -100, -100), 0)
                    
                    if (wheelDelta < maxDelta) {
                        const parallaxCardImages = /** @type {NodeListOf<HTMLImageElement>} */ (parallax.querySelectorAll('.parallax-card-img'))
                        parallaxCardImages.forEach((image) => {
                            image.animate({
                                objectPosition: `${percentage + 100}% center`
                            }, { duration: 1200, fill: "forwards" })
                        })
                    }

                    parallax.animate({
                        transformOrigin: 'center',
                        left: `${Math.abs(percentage)}%`,
                        transform: `translate(${percentage}%, 0% )`
                    }, { duration: 1200, fill: "forwards" })

                    updateDebugValues({
                        scroll: {
                            wheelDelta,
                            maxDelta,
                            percentage
                        }
                    })
                }
            }

            parallax.onmousedown = event => {
                parallax.dataset.mouseDownAt = event.clientX.toString()
                console.log('Parallax mouse at: ', parallax.dataset.mouseDownAt)
            }

            parallax.onmousemove = event => {
                if (parallax.dataset.mouseDownAt === "0") return

                const mouseDelta = parseFloat(parallax.dataset?.mouseDownAt ?? '0') - event.clientX
                const maxDelta = window.innerWidth / 2
                const percentage = (mouseDelta / maxDelta) * -100
                const nextPercentage = Math.min(Math.max(parseFloat(parallax.dataset?.prevPercentage ?? '0') + percentage, -100), 0)

                parallax.dataset.percentage = nextPercentage.toString()

                parallax.animate({
                    transformOrigin: 'center',
                    left: `${Math.abs(nextPercentage)}%`,
                    transform: `translate(${nextPercentage}%, 0% )`
                }, { duration: 1200, fill: "forwards" })

                const parallaxCardImages = /** @type {NodeListOf<HTMLImageElement>} */ (parallax.querySelectorAll('.parallax-card-img'))
                parallaxCardImages.forEach((image) => {
                    image.animate({
                        objectPosition: `${nextPercentage + 100}% center`
                    }, { duration: 1200, fill: "forwards" })
                })
            }

            parallax.onmouseup = () => {
                parallax.dataset.mouseDownAt = "0"
                parallax.dataset.prevPercentage = parallax.dataset.percentage
            }
        }
    })

    $: debug = {
        scroll: {

        },
        page: $page
    }
</script>

<svelte:head>
    <title>lnfel's Room</title>
</svelte:head>

<Header>
    <button on:click={toggleMenu} type="button" class="md:hidden text-tulip-tree-400 outline-none hover:bg-tulip-tree-400 focus:bg-tulip-tree-400 hover:text-slate-900 focus:text-slate-900 transition-colors p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
</Header>

<!-- overflow-hidden is needed when scrolling with native scroll -->
<main data-scrolled-amount="0" data-percentage="0" class="relative w-[max-content] h-screen md:static md:flex md:items-stretch md:h-full will-change-scroll">
    <slot />
</main>

<!-- <LamyDebugbar data={debug} open /> -->

<style>
    :global(.lamy-debugbar) {
        z-index: 30;
        /* opacity: 0.1; */
        transition: 300ms ease-in-out all;
    }
    :global(.lamy-debugbar:hover),
    :global(.lamy-debugbar:has(button:focus)) {
        opacity: 1;
    }
</style>