<script>
    import { onMount } from "svelte"
    import Logo from "./Logo.svelte"

    onMount(() => {
        const nav = document.querySelector('nav')
        const observer = new IntersectionObserver((entries) => {
            const header = document.querySelector('header')
            if (header) {
                const logoText = /** @type {HTMLHeadingElement} */ (header.querySelector('.logo-text'))
                if (entries[0].intersectionRatio <= 0.1) {
                    header.style.backdropFilter = 'saturate(50%) blur(4px)'
                    header.style.cssText = '--header-bg: rgb(15 23 42 / 0.5)'
                } else {
                    header.style.backdropFilter = 'none'
                    header.style.cssText = '--header-bg: transparent'
                }
            }
        }, {
            threshold: 0.1
        })
        if (nav) {
            observer.observe(nav)
        }
    })
</script>

<header class="fixed top-0 left-0 w-full md:w-[7rem] md:h-full bg-slate-900/50 px-4 py-2 lg:px-[3rem] z-30 transition-all duration-300 no-print">
    <div class="flex items-center justify-between">
        <Logo class="md:absolute md:translate-y-[-50%] md:translate-x-[-50%] md:top-[50%] md:left-[50%]" />
        
        <slot />
    </div>
</header>

<style>
    @property --header-bg {
        syntax: '<color>';
        initial-value: transparent;
        inherits: false;
    }
    :global(header) {
        /* rgb(15 23 42 / 0.5) */
        background: radial-gradient(transparent 0.75px, var(--header-bg) 0.75px);
        background-size: 4px 4px;
    }
</style>
