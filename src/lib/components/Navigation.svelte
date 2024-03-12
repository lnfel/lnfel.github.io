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