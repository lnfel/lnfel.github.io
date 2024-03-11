const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
/** @type {ReturnType<typeof setInterval> | Number | null} */
let interval = null

/**
 * A modified version from Hyperplexed
 * "The Ultimate Hacker Effect That Anyone Can Do" video
 * https://www.youtube.com/watch?v=W5oawMJaXbU
 * 
 * Changes to his code:
 * - Now supports multiple words
 * 
 * @type {(params: { target: String }) => void}
 */
export function decryptAnimation({ target }) {
    if (typeof target === 'string' && target) {
        const elementList = /** @type {NodeListOf<HTMLAnchorElement>} */ (document.querySelectorAll(target))

        elementList.forEach((element) => {
            element.dataset.value = element.innerText
            /**
             * @type {(event: MouseEvent & { target: HTMLAnchorElement }) => void} event 
             */
            function animate(event) {
                let iterations = 0
                clearInterval(/** @type {NodeJS.Timeout} */ (interval))

                const originalWords = event.target.dataset.value?.split(" ") ?? ""
                interval = setInterval(() => {
                    event.target.innerText = event.target.innerText.split(" ")
                        .map((word, wordIndex) => {
                            return word.split("").map((letter, letterIndex) => {
                                if (letterIndex < iterations) {
                                    return originalWords[wordIndex][letterIndex]
                                }
                                return letters[Math.floor(Math.random() * 52)]
                            })
                            .join("")
                        })
                        .join(" ")

                    if (event.target.dataset.value?.length && iterations >= event.target.dataset.value.length) {
                        clearInterval(/** @type {NodeJS.Timeout} */ (interval))
                    }

                    iterations += 1 / 5
                }, 30)
            }

            /**
             * @type {(event: MouseEvent & { target: HTMLAnchorElement }) => void} event 
             */
            function initialState(event) {
                clearInterval(/** @type {NodeJS.Timeout} */ (interval))
                event.target.innerText = event.target.dataset?.value ?? ""
            }

            element.onmouseover = /** @type {((this: GlobalEventHandlers, ev: MouseEvent) => any) | null} */ (animate)
            element.onfocus = /** @type {((this: GlobalEventHandlers, ev: FocusEvent) => any) | null} */ (animate)
            element.onmouseleave = /** @type {((this: GlobalEventHandlers, ev: MouseEvent) => any) | null} */ (initialState)
            element.onblur = /** @type {((this: GlobalEventHandlers, ev: FocusEvent) => any) | null} */ (initialState)
        })
    }
}

/**
 * @param {Element} element 
 * @param  {String} classnames 
 */
export function classToggle(element, classnames) {
    classnames.split(" ").map(string => element.classList.toggle(string))
}
