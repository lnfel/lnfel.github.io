<script lang="ts">
    import { onMount } from "svelte"

    let canvas: HTMLCanvasElement | undefined
    let frame = 0

    /**
     * https://codepen.io/supah/pen/BaNBmmw
     * https://stackoverflow.com/a/60066003/12478479
     * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
     * 
     * https://stackoverflow.com/a/9383136/12478479
     * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
     * https://stackoverflow.com/questions/18379818/canvas-image-masking-overlapping
     * 
     * https://www.nashvail.me/blog/canvas-image
     */
    function coverImage(image: HTMLImageElement, type: "cover" | "contain" = 'cover') {
        const ctx = canvas?.getContext('2d')
        const container: HTMLDivElement | null | undefined = canvas?.closest('.stellar-bg')
        if (ctx && container) {
            const imageRatio = image.height / image.width
            const containerRatio = container.offsetHeight / container.offsetWidth

            if ((imageRatio < containerRatio && type === 'contain') || (imageRatio > containerRatio && type === 'cover')) {
                const height = container.offsetWidth * imageRatio
                ctx?.drawImage(image, 0, (container.offsetHeight - height) / 2, container.offsetWidth, height)
            }

            if ((imageRatio > containerRatio && type === 'contain') || (imageRatio < containerRatio && type === 'cover')) {
                const width = container.offsetWidth * containerRatio / imageRatio
                ctx?.drawImage(image, 0, image.height, image.width, image.height, (container.offsetWidth - width) / 2, 0, width, container.offsetHeight)
            }
        }
    }

    function resize() {
        const container: HTMLDivElement | null | undefined = canvas?.closest('.stellar-bg')
        if (canvas && container) {
            canvas.width = container.offsetWidth
            canvas.height = container.offsetHeight
            canvas.style.width = `${container.offsetWidth}px`
            canvas.style.height = `${container.offsetHeight}px`
        }
    }

    function render(image: HTMLImageElement) {
        const ctx = canvas?.getContext('2d')
        if (ctx) {
            ctx.filter = `grayscale(${100 - Math.min(Math.max(frame * 1.5, 1), 100)}%)`
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
            coverImage(image, 'cover')
        }
        window.requestAnimationFrame(() => render(image))
        if (frame < 100) {
            frame++
        }
    }

    onMount(() => {
        const stellarIMG = new Image()
        stellarIMG.onload = (event) => {
            resize()
            render(stellarIMG)
        }
        stellarIMG.src = '/img/ui/stellar-bg/stellar-stellar.webp'

        window.onresize = resize
    })
</script>

<div class="stellar-bg h-full relative">
    <div class="stellar-filter absolute inset-0 z-[1] pointer-events-none"></div>
    <!-- w-full min-h-dvh -->
    <canvas bind:this={canvas} class="stellar-img absolute inset-0 w-full"></canvas>
    <img src="/img/ui/stellar-bg/grayscale.webp" alt="" class="stellar-grayscale hidden md:block w-full h-full object-cover object-[center_left]">
</div>

<style lang="postcss">
    .stellar-filter {
        background: radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px);
        background-size: 4px 4px;
        backdrop-filter: saturate(100%);
    }

    @media (min-width: 768px) {
        .stellar-filter {
            background: radial-gradient(transparent 0.75px, theme(colors.indigo.50 / 0.2) 0.75px);
            background-size: 4px 4px;
            backdrop-filter: saturate(100%);
        }

        @media (prefers-color-scheme: dark) {
            .stellar-filter {
                background: linear-gradient(to right, transparent 80%, rgb(15 23 42 / 1) 100%),
                    radial-gradient(transparent 0.75px, rgb(15 23 42 / 0.5) 0.75px);
                background-size: cover, 4px 4px;
            }
        }
    }
</style>
