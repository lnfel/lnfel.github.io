<script>
    import { enhance } from '$app/forms'
    import { removeBackground } from 'modern-rembg'

    /**
     * @param {Parameters<typeof import('modern-rembg').removeBackground>['0']} imageSource
     * @param {Parameters<typeof import('modern-rembg').removeBackground>['1']} [options]
     */
    async function rembg(imageSource, options) {
        /** @type {import('modern-rembg').RemoveBackgroundOptions} */
        const defaultOption = {
            debug: true,
            model: '/python/ai/models/isnet-anime.onnx',
            output: 'foreground',
            resolution: 320,
        }
        const previewCardClasses = "w-full h-96 object-contain object-center"
        const blob = await removeBackground(imageSource, Object.assign(defaultOption, options))
        const outputImage = document.querySelector('#output-image')
        const url = URL.createObjectURL(blob)
        console.log('output: ', url)
        const img = document.createElement('img')
        img.classList.add(...previewCardClasses.split(" "))
        outputImage?.append(img)
    }

    /**
     * @type {import('svelte/elements').FormEventHandler<HTMLInputElement>}
     */
    function showImage({ target }) {
        if (target instanceof HTMLInputElement) {
            const blob = target.files?.[0]
            if (blob) {
                const previewCardClasses = "w-full h-96 object-contain object-center"
                const sourceImage = document.querySelector('#source-image')
                const url = URL.createObjectURL(blob)
                const img = document.createElement('img')
                img.src = url
                img.classList.add(...previewCardClasses.split(" "))
                sourceImage?.append(img)
            }
        }
    }
</script>

<section class="min-h-[100vh] md:flex px-4 py-6 pt-[9rem] md:p-0 md:pb-56 bg-white dark:text-white dark:bg-slate-900">
    <div class="md:w-[7rem]"></div>
    <div class="section-content flex-grow px-4 md:p-20 space-y-10">
        <h1 class="w-full font-zenless-title text-4xl md:text-5xl dark:bg-slate-900 py-2">Image background remover</h1>

        <form use:enhance={({ formData }) => rembg(formData.get('image_source') ?? '')} method="POST" class="" enctype="multipart/form-data">
            <input on:input={showImage} type="file" name="image_source" />
            <button>Remove background</button>
        </form>

        <div class="preview w-full grid grid-cols-2 gap-4">
            <div id="source-image" class="preview-card space-y-4">
                <h2 class="text-xl text-center">Source image</h2>
            </div>
            <div id="output-image" class="preview-card space-y-4">
                <h2 class="text-xl text-center">Output image</h2>
            </div>
        </div>
    </div>
</section>
