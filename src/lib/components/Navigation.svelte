<script>
    import { onMount, onDestroy } from "svelte"
    import { onNavigate } from "$app/navigation"
    import { scrollToHash, navigateToHash, onHashChange } from "$lib/utils/navigation"

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

        return new Promise(resolve => {
            document.startViewTransition(async () => {
                resolve()
                await navigation.complete
            })
        })
    })

    onMount(() => {
        const main = document.querySelector('main')
        /**
         * Horizontal Scrolling using mousewheel/trackpad
         */
        if (main instanceof HTMLElement) {
            main.addEventListener('wheel', (event) => {
                const mediumScreen = window.matchMedia("(min-width: 768px)")
                event.preventDefault()
                // console.log('main wheel event: ', {
                //     deltaY: event.deltaY
                // })
                mediumScreen.matches
                    ? main.scrollLeft += event.deltaY
                    : main.scrollTop += event.deltaY
            })
        }
        /**
         * Hash navigation
         * Clicking navigation links auto scrolls to anchored section
         */
        const menuLinks = /** @type {NodeListOf<HTMLAnchorElement>} */ (document.querySelectorAll('.menu-link'))
        menuLinks.forEach((link) => {
            link.onclick = /** @type {((this: GlobalEventHandlers, ev: MouseEvent) => any) | null} */ (navigateToHash({ scrollElement: main }))
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

    // onDestroy(() => {
    //     const main = document.querySelector('main')
    //     const menuLinks = /** @type {NodeListOf<HTMLAnchorElement>} */ (document.querySelectorAll('.menu-link'))
    //     menuLinks.forEach((link) => {
    //         link.removeEventListener('click', /** @type {(this: HTMLAnchorElement, ev: MouseEvent) => any} */ (navigateToHash({ scrollElement: main })))
    //     })
    //     window.removeEventListener('hashchange', /** @type {(this: Window, ev: HashChangeEvent) => any} */ (onHashChange({ scrollElement: main })))
    // })
</script>