import { readFile } from 'fs/promises'
import { sequence } from '@sveltejs/kit/hooks'

/**
 * Version controlled static assets for automatic cache busting
 * 
 * Hash is generated based on file contents, making sure cache is busted for clients
 * when a change is pushed to deployment.
 * 
 * @type {import('@sveltejs/kit').Handle}
 * @returns {Promise<import('@sveltejs/kit').MaybePromise<Response>>}
 */
async function staticAssetsVersion({ event, resolve }) {
    const preload_types = ['js', 'css', 'font']
    /**
     * @type {import('@sveltejs/kit').ResolveOptions}
     */
    const resolveOptions = {
        transformPageChunk: /** @param {{ html: String, done: Boolean }} input */ async ({ html }) => {
            const cssContent = await readFile('static/css/main.css', { encoding: 'utf8' })
            const fontContent = await readFile('static/css/font.css', { encoding: 'utf-8' })
            const ogImage = await readFile('static/img/ui/stellar-bg/stellar-stellar.webp', { encoding: 'utf-8' })
            return html.replaceAll('/css/main.css', `/css/main.css?v=${tinySimpleHash(cssContent)}`)
                .replaceAll('/css/font.css', `/css/font.css?v=${tinySimpleHash(fontContent)}`)
                .replaceAll('https://lnfel.github.io/img/ui/stellar-bg/stellar-stellar.webp', `https://lnfel.github.io/img/ui/stellar-bg/stellar-stellar.webp?v=${tinySimpleHash(ogImage)}`)
        },
        preload: /** @param {{ type: "js" | "css" | "font" | "asset", path: String }} input */ ({ type }) => {
            return preload_types.includes(type)
        }
    }
    return await resolve(event, resolveOptions)
}

/**
 * Tiny Simple hash by bryc
 * From the author of cyrb53
 * 
 * https://stackoverflow.com/a/52171480/12478479
 * https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
 * 
 * @param {String} s 
 * @returns {Number} Hashed number representation of the string
 */
function tinySimpleHash(s) { for(var i=0,h=9;i<s.length;) h = Math.imul(h^s.charCodeAt(i++), 9**9); return h^h >>> 9 }

export const handle = sequence(
    staticAssetsVersion
)
