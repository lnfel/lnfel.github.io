<script>
    import { onMount } from "svelte"
    import { base } from "$app/paths"
    // https://puruvj.dev/blog/macos-dock-animation-svelte
    // https://github.com/PuruVJ/macos-web-svelte-dock/blob/main/src/lib/DockItem.svelte
    // import { spring } from "svelte/motion"
    // import { interpolate } from 'popmotion'
    import { createToolbar, melt } from '@melt-ui/svelte'
    // import { Application, Assets, Sprite } from 'pixi.js'

    import Navlink from "$lib/components/Navlink.svelte"

    /** @type {import('$lib/utils/navigation').NavLink[]} */
    export let navlinks

    /** @type {HTMLElement} */
    let floatingNav

    const {
        elements: { root, button, link, separator },
        builders: { createToolbarGroup }
    } = createToolbar()

    onMount(async () => {
        // const defaultScale = 1
        // const hoverItemScale = 1.5
        // const neighborItemScale = 1.2
        // const defaultMargin = "0.025rem"
        // const expandedMargin = "0.5rem"
        // const floatingNavLinks = /** @type {NodeListOf<HTMLElement>} */ (floatingNav.querySelectorAll('.floating-nav-link'))
        // floatingNavLinks?.forEach((item, index) => {
        //     let scale = defaultScale
        //     let margin = defaultMargin
        //     const nextSibling = /** @type {HTMLElement | null} */ (item.nextElementSibling)
        //     const previousSibling = /** @type {HTMLElement | null} */ (item.previousElementSibling)

        //     item.onmousemove = () => {
        //         item.style.scale = hoverItemScale.toString()
        //         item.style.marginLeft = expandedMargin
        //         item.style.marginRight = expandedMargin
        //         if (nextSibling) {
        //             nextSibling.style.scale = neighborItemScale.toString()
        //         }
        //         if (previousSibling) {
        //             previousSibling.style.scale = neighborItemScale.toString()
        //         }
        //     }

        //     item.onmouseleave = () => {
        //         item.style.scale = scale.toString()
        //         item.style.marginLeft = margin
        //         item.style.marginRight = margin
        //         if (nextSibling) {
        //             nextSibling.style.scale = defaultScale.toString()
        //         }
        //         if (previousSibling) {
        //             previousSibling.style.scale = defaultScale.toString()
        //         }
        //     }
        // })

        // const pixi = new Application()
        // await pixi.init({
        //     width: 640,
        //     height: 360,
        //     // manageImports: false
        // })
        // floatingNav.appendChild(pixi.canvas)

        // const assets = await Assets.load(`${window.location.origin}/img/ui/stellar-bg/stellar-stellar.webp`)
        // const stellarBGSprite = Sprite.from(`${window.location.origin}/img/ui/stellar-bg/stellar-stellar.webp`)
        // pixi.stage.addChild(stellarBGSprite)

        // let elapsed = 0.0
        // pixi.ticker.add((ticker) => {
        //     elapsed += ticker.deltaTime
        //     stellarBGSprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0
        // })
    })
</script>

<!-- 
    This component is injected to body via client-side component API
    https://svelte.dev/docs/client-side-component-api
 -->
<div use:melt={$root} bind:this={floatingNav} class="floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4">
    {#each navlinks as { href, text, disabled }, index}
        {#if !disabled}
            <a use:melt={$link} {href} data-count="{index}" aria-label="Go to {text.toLowerCase()} section." class="floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1">
                { text }
            </a>
        {:else}
            <!-- <span class="font-zenless-title uppercase text-xs text-slate-500 line-through tracking-wider px-2 py-1">{ text }</span> -->
        {/if}
    {/each}
</div>

<style lang="postcss">
    /**
     * Transition linear-gradient colors, can do it on hover but we cannot transition backwards...???
     * https://stackoverflow.com/a/63848864/12478479
     */
    @property --transparent {
        syntax: '<color>';
        initial-value: #000000;
        inherits: false;
    }
    @property --color-1 {
        syntax: '<color>';
        initial-value: #000000;
        inherits: false;
    }
    @property --color-2 {
        syntax: '<color>';
        initial-value: #000000;
        inherits: false;
    }
    @property --color-3 {
        syntax: '<color>';
        initial-value: #000000;
        inherits: false;
    }

    @media (prefers-color-scheme: dark) {
        @property --transparent {
            syntax: '<color>';
            initial-value: #ffffff;
            inherits: false;
        }
        @property --color-1 {
            syntax: '<color>';
            initial-value: #ffffff;
            inherits: false;
        }
        @property --color-2 {
            syntax: '<color>';
            initial-value: #ffffff;
            inherits: false;
        }
        @property --color-3 {
            syntax: '<color>';
            initial-value: #ffffff;
            inherits: false;
        }
    }
    
    .floating-nav-link {
        --gradient-gap: 1px;
        transform: translateY(30%);
        opacity: 0;
        pointer-events: none;
        background: linear-gradient(to top right,
            var(--color-1) calc(19% - var(--gradient-gap)), var(--transparent) 19%,
            var(--transparent) calc(20% - var(--gradient-gap)), var(--color-2) 20%,
            var(--color-2) calc(39% - var(--gradient-gap)), var(--transparent) 39%,
            var(--transparent) calc(40% - var(--gradient-gap)), var(--color-3) 40%,
            var(--color-3) calc(59% - var(--gradient-gap)), var(--transparent) 59%,
            var(--transparent) calc(60% - var(--gradient-gap)), var(--color-1) 60%,
            var(--color-1) calc(79% - var(--gradient-gap)), var(--transparent) 79%,
            var(--transparent) calc(80% - var(--gradient-gap)), var(--color-2) 80%
        );
        color: transparent;
        background-clip: text;
        transition: transform 300ms ease-in,
            opacity 300ms ease-in,
            --transparent 300ms ease-in,
            --color-1 300ms ease-in,
            --color-2 300ms ease-in,
            --color-3 300ms ease-in;
    }

    .floating-nav-link:hover,
    .floating-nav-link:focus {
        --transparent: transparent;
        --color-1: #6366f1;
        --color-2: #ec4899;
        --color-3: #66e2fa;
        color: transparent;
        background-clip: text;
        transition: --transparent 300ms ease-in,
            --color-1 300ms ease-in,
            --color-2 300ms ease-in,
            --color-3 300ms ease-in;
    }

    .floating-nav-link:nth-of-type(1) {
        transition-delay: 75ms;
    }

    .floating-nav-link:nth-of-type(2) {
        transition-delay: 150ms;
    }

    .floating-nav-link:nth-of-type(3) {
        transition-delay: 225ms;
    }

    .floating-nav-link:nth-of-type(4) {
        transition-delay: 300ms;
    }

    :global(.floating-nav-link.enter) {
        transform: translateY(0%);
        opacity: 1;
        transition: all 300ms ease-in;
        pointer-events: all;
    }
</style>
