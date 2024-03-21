import { transparentBackground } from 'transparent-background'

/**
 * 
 * @param {File} file 
 * @returns {Boolean}
 */
const emptyFile = (file) => {
    return file?.name === 'undefined' && file?.size === 0 && file?.type === 'application/octet-stream'
        || file === undefined
        || typeof file !== 'object' // curl, insomnia or any similar request does not do what file input does
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const imageSources = Array.from(/** @type {File[]} */ (formData.getAll('image_sources')))
        console.log('imageSources: ', imageSources)

        if (emptyFile(imageSources[0])) return {  }

        let output = []
        for (const image of imageSources) {
            output.push(await transparentBackground(Buffer.from(await image.arrayBuffer()), "png", {
                fast: false
            }))
        }

        output.map((buffer) => {
            return `data:image/png;base64,${buffer.toString('base64')}`
        })

        return {
            output
        }
    }
}