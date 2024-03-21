<script>
    import { browser } from "$app/environment"
    import { onMount } from "svelte"

    // async function pyodideInit() {
    //     const { loadPyodide, version } = (await import('pyodide'))
    //     const pyodide = await loadPyodide({
    //         indexURL: 'https://cdn.jsdelivr.net/npm/pyodide@0.25.0'
    //     })
    //     await pyodide.loadPackage('micropip')
    //     const micropip = pyodide.pyimport('micropip')
    //     console.log(pyodide)
    //     console.log(micropip)
    // }

    // if (!browser) {
    //     pyodideInit()
    // }

    onMount(async () => {
        const pyodide = await loadPyodide()
        await pyodide.loadPackage('micropip')
        const micropip = pyodide.pyimport('micropip')
        // await micropip.install("https://lnfel.github.test/python/wheels/rembg-2.0.56+1.ge1bd73c-py3-none-any.whl", "keep_going=True")

        // CHALLENGE IMPOSSIBLE
        // https://github.com/microsoft/onnxruntime/discussions/16999#discussioncomment-6640918
        // await micropip.install("https://files.pythonhosted.org/packages/22/46/54e5f5dec8d024bd077a3b48c9462e9310e03c5e1bf6104c3ecf683e2816/onnxruntime-1.17.1-cp38-cp38-macosx_11_0_universal2.whl", "keep_going=True")
        // await micropip.install("https://www.piwheels.org/simple/rembg/rembg-2.0.56-py3-none-any.whl#sha256=9aab0d6fbecf68a31c7e75ca198c89e99bdd0c6e6cef7c5ff44b9cfdeb272df8", "keep_going=True")
        // await micropip.install("snowballstemmer")
        // await pyodide.runPython(`
        // import snowballstemmer
        // stemmer = snowballstemmer.stemmer('english')
        // print(stemmer.stemWords('go goes going gone'.split()))
        // `)
        // console.log(pyodide)
        // console.log(micropip)
    })
</script>

<svelte:head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"></script>
</svelte:head>

<section class="shrink-0 md:flex px-4 py-6 pt-[9rem] md:p-0 md:pb-56 bg-white text-slate-900 dark:bg-slate-900">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-4 md:pt-20">

    </div>
</section>