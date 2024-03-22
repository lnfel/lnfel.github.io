import { createCanvas } from '@napi-rs/canvas'
import { decodeBlurHash } from "fast-blurhash"
import { projects } from "$lib/content"

export function entries() {
    const entries = projects.map((project) => {
        return {
            project: project.title.split(" ").join("-").toLowerCase()
        }
    })
    return entries
}

/**
 * @type {import("./$types").RequestHandler}
 */
export async function GET({ params, url }) {
    const project = projects.find((project) => project.title.split(" ").join("-").toLowerCase() === params.project.toLowerCase())
    // const width = Number(url.searchParams.get('width') ?? 2500 / 4)
    // const height = Number(url.searchParams.get('height') ?? 1200 / 4)
    const width = 2500 / 4
    const height = 1200 / 4
    const pixels = decodeBlurHash(project?.blurhash ?? '', width, height, 1)
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    const imageData = context.createImageData(width, height)
    imageData.data.set(pixels)
    context.putImageData(imageData, 0, 0)
    // const buffer = canvas.toBuffer("image/webp")
    const buffer = await canvas.encode('webp')
    const blob = new Blob([buffer])
    return new Response(await blob.arrayBuffer(), {
        headers: {
            'content-type': 'image/webp',
            'content-length': buffer.byteLength.toString()
        }
    })
}

export const prerender = true
