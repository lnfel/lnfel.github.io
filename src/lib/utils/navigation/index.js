import { pushState } from "$app/navigation"
import { classToggle } from "$lib/utils"

/**
 * @type {Record<String, { text: String, href: String, disabled?: Boolean }[]>}
 */
export const menu = {
    '/': [
        // { text: 'Home', href: '/' },
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' },
        { text: 'Resume', href: '/resume' },
        { text: 'Blog', href: '/blog', disabled: true },
    ],
    '/blog': [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/#about' },
        { text: 'Projects', href: '/#projects' },
        { text: 'Contact', href: '/#contact' },
        { text: 'Blog', href: '/blog' },
    ]
}

/**
 * Smooth scroll to anchor link's hash
 * 
 * @param {{ hash?: String, scrollElement: HTMLElement | null, duration?: Number }} ScrollToHashParams
 */
export function scrollToHash({ hash = '', scrollElement, duration = 1000 }) {
    if (scrollElement instanceof HTMLElement) {
        const anchorID = hash.replace('#', '')
        const anchor = document.getElementById(anchorID)
        const mediumScreen = window.matchMedia("(min-width: 768px)")
        if (mediumScreen.matches) {
            // scrollElement.scrollTo({
            //     left: anchor?.offsetLeft ?? 0,
            //     behavior: 'smooth'
            // })
            const anchorDelta = anchor?.offsetLeft ?? 0
            const maxDelta = scrollElement.getBoundingClientRect().width
            const percentage = Math.min(Math.max((anchorDelta / maxDelta) * -100, -75), 0)

            scrollElement.dataset.scrolledAmount = (anchorDelta / 2).toString()
            scrollElement.dataset.percentage = percentage.toString()

            scrollElement.animate({
                transformOrigin: 'center',
                left: `${Math.abs(percentage)}%`,
                transform: `translate(${percentage}%, 0% )`
            }, { duration, fill: "forwards" })

            // console.log('scrollToHash: ', {
            //     percentage,
            //     anchorDelta,
            //     maxDelta,
            //     anchorID,
            //     anchor
            // })

            // window.scrollTo({
            //     left: anchor.offsetLeft ?? 0,
            //     behavior: 'smooth'
            // })
        } else {
            // scrollElement.scrollTo({
            //     top: anchor?.offsetTop ?? 0,
            //     behavior: 'smooth'
            // })
            window.scrollTo({
                top: anchor?.offsetTop ?? 0,
                behavior: 'smooth'
            })
        }
    }
}

/**
 * Navigate to anchor link's hash
 * 
 * @type {(NavigateToHashParams: { scrollElement: HTMLElement | null }) => (event: MouseEvent & { target: HTMLAnchorElement }) => void}
 */
export function navigateToHash({ scrollElement }) {
    return (event) => {
        const activeURL = new URL(event.target?.href ?? '')
        const anchorID = activeURL.hash.replace('#', '')

        // toggle nav container on small screens
        const nav = document.querySelector('.menu-container')
        const mediumScreen = window.matchMedia("(min-width: 768px)")
        if (nav && !mediumScreen.matches) {
            classToggle(nav, "show")
        }

        // scroll and append history
        if (anchorID !== '' && scrollElement instanceof HTMLElement) {
            event.preventDefault()
            scrollToHash({ hash: activeURL.hash, scrollElement })
            pushState(activeURL, {
                hash: activeURL.hash,
                pathname: activeURL.pathname
            })
        }
    }
}

/**
 * @type {(OnHashChangeParams: { scrollElement: HTMLElement | null }) => (((this: WindowEventHandlers, ev: HashChangeEvent) => any) & ((this: Window, ev: HashChangeEvent) => any)) | null} 
 */
export function onHashChange({ scrollElement }) {
    return (event) => {
        const url = new URL(event.newURL)
        // console.log('onHashChange hash: ', url?.hash)
        scrollToHash({ hash: url?.hash, scrollElement })
    }
}
