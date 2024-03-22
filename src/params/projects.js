import { projects } from '$lib/content'

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const projectNames = projects.map(project => project.title.split(" ").join("-").toLowerCase())
    return projectNames.includes(param)
}
