<script>
    import { createTooltip, melt } from '@melt-ui/svelte'

    // https://dev.to/rahulj9a/how-to-build-simple-link-preview-without-any-library-in-js-2j84
    export let href = ""
    export let target = "_blank"
    export let title = ''
    export let description = ''
    export let image = ''

    let linkDataStatus = 'idle'
    let promise = new Promise((resolve, reject) => {})

    const {
        elements: { trigger, content, arrow },
        states: { open },
    } = createTooltip({
        positioning: {
            placement: 'right'
        },
        openDelay: 0,
        closeDelay: 0,
        closeOnPointerDown: false,
        forceVisible: true
    })

    /**
     * @param {String} url
     */
    async function fetchLinkData(url) {
        if (title && description && image) {
            await resolveData()
            return;
        }

        try {
            const response = await fetch(url)
            if (linkDataStatus === 'idle' && response.status === 200) {
                const result = await response.text()
                const parser = new DOMParser()
                const doc = parser.parseFromString(result, 'text/html')
                title = title || doc.querySelector('title')?.textContent || ''
                description = description || doc.querySelector('meta[name="description"]')?.getAttribute('content') || ''
                image = image || doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || doc.querySelector('meta[property="twitter:image"]')?.getAttribute('content') || ''
                linkDataStatus = 'loaded'
                console.log({
                    title,
                    description,
                    image
                })
                await resolveData()
            }
        } catch(error) {
            linkDataStatus = 'error'
            await resolveData()
        }
    }

    async function resolveData() {
        promise = new Promise((resolve, reject) => {
            resolve({
                title,
                description,
                image
            })
        })
    }
</script>

<a use:melt={$trigger} on:mouseover={() => fetchLinkData(href)} on:focus={() => fetchLinkData(href)} {href} {target} class="{$$props.class}">
    <slot />
</a>

{#if $open}
    <div use:melt={$content} class="z-10 rounded-lg bg-white shadow overflow-hidden transition-all duration-200 ease-linear">
        <!-- <div use:melt={$arrow} /> -->
        {#await promise}
            <div class="h-56 w-64 md:w-96 flex items-center">
                <span class="loader"></span>
            </div>
        {:then {title, description, image}} 
            <img src="{image}" alt="{title} logo" class="max-h-56 w-64 md:w-96 object-contain">
            <div class="w-64 md:w-96 p-2">
                <div class="flex items-center gap-2">
                    <span>{ title }</span>
                    <a {href} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        <span class="sr-only">{title}</span>
                    </a>
                </div>
                <p class="text-xs">{ description }</p>
            </div>
        {/await}
    </div>
{/if}

<style lang="postcss">
    .loader {
        width: 100%;
        height: 4.8px;
        display: inline-block;
        position: relative;
        background: theme(colors.sky.500);
        overflow: hidden;
    }
    .loader::after {
        content: '';
        width: 192px;
        height: 4.8px;
        background: #FFF;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
        0% {
            left: 0;
            transform: translateX(-100%);
        }
        100% {
            left: 100%;
            transform: translateX(0%);
        }
    }
</style>
