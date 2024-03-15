<script>
    import { onMount, onDestroy } from "svelte"
    import { page } from "$app/stores"
    import { base } from "$app/paths"
    import { onNavigate } from "$app/navigation"
    import { decryptAnimation } from "$lib/utils"
    import { scrollToHash, navigateToHash, onHashChange } from "$lib/utils/navigation"
    import { menu } from "$lib/utils/navigation"

    import Navlink from "$lib/components/Navlink.svelte"

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
     */
    onNavigate((navigation) => {
        /**
         * Enable auto-scrolling between page navigation
         * But since we are using view transition we won't get to see
         * auto-scrolling to anchor sections.
         */
        const main = document.querySelector('main')
        scrollToHash({ hash: navigation.to?.url?.hash, scrollElement: main })
        
        if (!document.startViewTransition) return

        // return new Promise(resolve => {
        //     document.startViewTransition(async () => {
        //         resolve()
        //         await navigation.complete
        //     })
        // })
    })

    onMount(() => {
        decryptAnimation({ target: '.menu-link' })
        
        const main = document.querySelector('main')
        /**
         * Horizontal Scrolling using mousewheel/trackpad
         */
        if (main instanceof HTMLElement) {
            window.addEventListener('wheel', (event) => {
                const mediumScreen = window.matchMedia("(min-width: 768px)")
                if (mediumScreen.matches) {
                    event.preventDefault()
                    main.dataset.scrolledAmount = (Number(main.dataset.scrolledAmount) + event.deltaY).toString()
                    const wheelDelta = Number(main.dataset.scrolledAmount)
                    const maxDelta = main.getBoundingClientRect().width / 2 // main.getBoundingClientRect().width
                    console.log('maxDelta: ', maxDelta)

                    if (wheelDelta < 0) main.dataset.scrolledAmount = '0';
                    if (wheelDelta >= maxDelta) main.dataset.scrolledAmount = maxDelta.toString();
                    const percentage = Math.min(Math.max((wheelDelta / maxDelta) * -100, -75), 0)

                    main.dataset.percentage = percentage.toString()

                    main.animate({
                        transformOrigin: 'center',
                        left: `${Math.abs(percentage)}%`,
                        transform: `translate(${percentage}%, 0% )`
                    }, { duration: 1000, fill: "forwards" })
                }
                // event.preventDefault()
                // This one requires overflow-hidden on main element and is not smooth on Windows OS
                // mediumScreen.matches
                //     ? main.scrollLeft += event.deltaY
                //     : main.scrollTop += event.deltaY
            }, { passive: false })
        }
        /**
         * Hash navigation
         * Clicking navigation links auto scrolls to anchored section
         */
        const menuLinks = /** @type {NodeListOf<HTMLAnchorElement>} */ (document.querySelectorAll('.menu-link'))
        menuLinks.forEach((link) => {
            link.onclick = /** @type {((this: GlobalEventHandlers, ev: MouseEvent) => any) | null} */ (navigateToHash({ scrollElement: main }))
        })

        const links = ['.project-internal-link', '.project-external-link']
        links.forEach((link) => {
            const nodelist = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll(link))
            nodelist.forEach((element) => {
                element.onclick = (event) => {
                    event.stopPropagation()
                }
            })
        })

        let hash = window.location.hash
        /**
         * These are black list for hashes, we trigger scroll onMount
         * if current hash is not included/blacklisted on page load
         * 
         * i.e. If visitor browse for lnfel.github.io/#about by entering it on the browser
         * url bar, they will be brought to about section using auto-scroll
         * 
         * @type {String[]}
         */
        const hashes = []
        if (!hashes.includes(hash)) {
            scrollToHash({ hash, scrollElement: main })
        }

        window.onhashchange = onHashChange({ scrollElement: main })
    })
</script>

<div class="stellar-container fixed inset-0 md:relative w-screen h-screen overflow-hidden shrink-0 z-20">
    <div class="stellar-bg h-full relative">
        <div class="stellar-colored"></div>
        <img src="/img/ui/stellar-bg/grayscale.webp" alt="" class="stellar-grayscale hidden md:block">
    </div>
    <div class="menu-container absolute inset-0 z-30">
        <nav class="menu w-full h-full flex flex-col justify-between md:p-20">
            <div class="menu-links-container flex flex-col gap-2 px-4 py-6 pt-36 md:pt-0 md:pl-[5rem]">
                {#each menu[(new URL($page.url)).pathname] as { text, href, disabled }}
                    <Navlink href="{base}{href}" {text} {disabled} />
                {/each}
            </div>
            <div class="flex items-center gap-2 px-8 py-6 md:pl-[6.5rem]">
                <div class="w-10 h-10">
                    <img src="/img/ui/svelte-logo.svg" alt="" width="100" height="100" class="object-contain aspect-square">
                </div>
                <span class="font-zenless-copy">Proudly made with <a href="https://kit.svelte.dev/" target="_blank" class="text-[#ff3e00] outline-none hover:underline focus:underline">SvelteKit</a></span>
            </div>
        </nav>
    </div>
</div>

<style>
    .stellar-container {
        opacity: 0;
        transition: 300ms opacity 500ms ease-in-out;
    }
    :global(.stellar-container:not(:has(.menu-container.show))) {
        pointer-events: none;
    }
    .stellar-colored {
        position: absolute;
        inset: 0;
        background: radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px),
            url('/img/ui/stellar-bg/stellar-stellar.webp');
        background-size: 4px 4px, cover;
        backdrop-filter: saturate(50%) blur(4px);
        background-position: bottom left;
        pointer-events: none;
    }
    .stellar-container:has(.menu-container.show) {
        opacity: 1;
        transition: all 200ms ease-in-out;
    }
    .stellar-grayscale {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom left;
    }
    @keyframes stellar-fade {
        0% {
            -webkit-mask-position: 0% 0%;
            mask-position: 0% 0%;
        }
        100% {
            -webkit-mask-position: 100% 0%;
            mask-position: 100% 0%;
        }
    }
    /* .menu-bg {
        pointer-events: none;
        opacity: 0;
        background: radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px),
            url(/img/stellar-stellar.jpeg);
        background-size: 0px 0px, cover;
        backdrop-filter: saturate(50%) blur(4px);
        background-position: center, bottom left;
        transition: 300ms all 500ms ease-in-out;
    } */
    /* .menu-bg:has(.menu-container.show) {
        opacity: 1;
        background-size: 4px 4px, cover;
        transition: all 200ms ease-in-out;
    } */
    .menu-container {
        display: grid;
        grid-template-rows: 0fr;
        transition: 500ms grid-template-rows ease-in-out;
    }
    .menu {
        overflow: hidden;
    }
    :global(.menu-container.show) {
        grid-template-rows: 1fr;
        transition: 500ms grid-template-rows 300ms linear;
    }

    @media (min-width: 768px) {
        /* .menu {
            background: linear-gradient(to right, transparent 80%, rgb(15 23 42 / 1) 100%),
                radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px),
                url(/img/stellar-stellar.jpeg);
            background-size: cover, 4px 4px, cover;
            backdrop-filter: saturate(50%) blur(4px);
        } */
        .menu-container {
            grid-template-rows: 1fr;
        }
        .stellar-container {
            opacity: 1;
        }
        :global(.stellar-container:not(:has(.menu-container.show))) {
            pointer-events: all;
        }
        .stellar-colored {
            background: linear-gradient(to right, transparent 80%, rgb(15 23 42 / 1) 100%),
                radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px),
                url('/img/ui/stellar-bg/stellar-stellar.webp');
            background-size: cover, 4px 4px, cover;
            backdrop-filter: saturate(50%) blur(4px);
            background-position: bottom left;

            -webkit-mask-image: url('/img/ui/stellar-bg/mask-6f.webp');
            mask-image: url('/img/ui/stellar-bg/mask-6f.webp');
            -webkit-mask-size: cover;
            mask-size: cover;
            -webkit-mask-position: 0% 0%;
            mask-position: 0% 0%;

            transition: -webkit-mask-position;
            animation: 500ms stellar-fade 1.5s steps(5) forwards;
        }
    }

    @media (min-width: 1280px) {
        .stellar-bg {
            height: auto;
        }
    }
</style>