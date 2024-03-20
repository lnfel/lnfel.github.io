export class Flip {
    /**
     * @param {HTMLElement} element 
     * @returns {DOMRect}
     */
    setFirstState(element) {
        this.firstState = element.getBoundingClientRect()
        return this.firstState
    }
    /**
     * @param {HTMLElement} element 
     * @returns {DOMRect}
     */
    setLastState(element) {
        this.lastState = element.getBoundingClientRect()
        return this.lastState
    }
    /**
     * 
     * @param {DOMRect} firstState 
     * @param {DOMRect} lastState 
     * @returns {{ x: Number, y: Number, scaleX: Number, scaleY: Number }} Delta
     */
    getDelta(firstState, lastState) {
        const first = this.firstState ?? firstState
        const last = this.lastState ?? lastState
        if (!first) throw Error('Please capture first state before calculating delta.')
        if (!last) throw Error('Please capture last state before calculating delta.')
        const validDOMRect = first instanceof DOMRect && last instanceof DOMRect
        if (!validDOMRect) {
            throw Error('First and Last state should follow or implement the shape of a DOMRect object.')
        }
            
        const delta = {
            x: -1 * (last.left - first.left),
            y: -1 * (last.top - first.top),
            scaleX: first.width / last.width,
            scaleY: first.height / last.height
        }
        return delta
    }
    /**
     * @param {HTMLElement} element 
     */
    invert(element) {
        const first = this.firstState
        const last = this.lastState ?? element.getBoundingClientRect()
        const delta = this.getDelta(/** @type {DOMRect} */ (first), last)

        if (!element) throw Error('Invert requires an element to apply transform to.')

        element.style.transformOrigin = 'top left'
        element.style.transform = `
            translate(${delta.x}px, ${delta.y}px)
            scale(${delta.scaleX}, ${delta.scaleY})`
    }
    /**
     * @param {HTMLElement} element 
     */
    play(element) {
        requestAnimationFrame(() => {
            element.classList.add('animate')
            element.style.transform = 'none'
        })
    }
    clearStates() {
        this.firstState = null
        this.lastState = null
    }
}
