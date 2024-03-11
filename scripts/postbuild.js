import * as path from "path"
import { fileURLToPath } from "url"
import { rm } from 'node:fs/promises'
import { crayon } from "crayon.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathsToExclude = [
    '../build/3d/',
    '../build/draco/',
    '../build/models/',
]

/**
 * Remove directories and files from build folder
 * 
 * @param {String[]} paths 
 */
async function excludeFilesFromBuild(paths) {
    console.log(crayon.lightYellow('Removing the following paths from build output:'))
    paths.forEach(async (src) => {
        const resolvedPathName = path.join(__dirname, src)
        const parentDirectory = path.basename(path.dirname(resolvedPathName))
        const directory = path.basename(resolvedPathName)
        console.log(`${path.join(__dirname, '..')}${crayon.lightRed(`/${parentDirectory}/${directory}`)}`)
        await rm(resolvedPathName, { recursive: true, force: true })
    })
}

(async () => {
    Promise.all([excludeFilesFromBuild(pathsToExclude)])
        .catch((error) => {
            console.log(error)
        })
})()
