/**
 * @see {@link https://github.com/sveltejs/svelte/issues/3105#issuecomment-1868458487}
 * @see {@link https://svelte.dev/docs/special-elements#svelte-body | svelte:body}
 * @type {import('svelte/action').Action<HTMLElement, String | String[]>}
 */
export const classList = (node, classes) => {
    const tokens = Array.isArray(classes) ? classes : classes.split(" ")
    node.classList.add(...tokens)

    return {
        destroy() {
            node.classList.remove(...tokens)
        }
    }
}
