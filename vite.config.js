import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
    ssr: {
        noExternal: ['three']
    },
    server: {
        host: '0.0.0.0',
        port: 7777
    },
    preview: {
        port: 7777
    },
    resolve: {
        alias: {
            /**
             * [Bugfix] Fail to resolve node-fetch when importing pyodide
             * @see {@link https://github.com/pyodide/pyodide/issues/4244#issuecomment-1816370425}
             */
            'node-fetch': 'isomorphic-fetch'
        }
    }
});
