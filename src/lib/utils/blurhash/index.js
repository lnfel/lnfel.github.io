import { decodeBlurHash, getBlurHashAverageColor } from 'fast-blurhash'
import { encode, decode } from 'blurhash'

/**
 * @param {String} src
 * @returns {Promise<HTMLImageElement>}
 */
export async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = (...args) => reject(args)
        img.src = src
    })
}

/**
 * @param {HTMLImageElement} image
 */
export function getImageData(image) {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context?.drawImage(image, 0, 0)
    return context?.getImageData(0, 0, image.width, image.height)
}

/**
 * @param {String} imageURL
 */
export async function blurhashImage(imageURL) {
    const image = await loadImage(imageURL)
    const imageData = getImageData(image)
    if (imageData) {
        return encode(imageData.data, imageData.width, imageData.height, 4, 4)
    }
}

/**
 * @param {String} imageURL
 */
export async function blurhashColor(imageURL) {
    const blurhash = await blurhashImage(imageURL)
    if (blurhash) {
        const averageColor = getBlurHashAverageColor(blurhash)
        return `rgb(${averageColor.join(',')})`
    }
}

/**
 * @param {String} blurhash 
 * @param {Number} width 
 * @param {Number} height 
 */
export async function blurhashToBlobURL(blurhash = '', width, height) {
    // decode blurhash image
    const pixels = decodeBlurHash(blurhash, width, height, 1)

    // draw on canvas
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (context) {
        return new Promise((resolve, reject) => {
            const imageData = context.createImageData(width, height)
            imageData.data.set(pixels)
            context.putImageData(imageData, 0, 0)
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(URL.createObjectURL(blob))
                } else {
                    reject()
                }
            })
        })
    }
}
