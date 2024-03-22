<script>
    import "$lib/app.css"
	import { browser } from "$app/environment"
    import { page } from "$app/stores"

    let promise = new Promise(() => {})

    /**
     * Inclusive number randomizer
     * 
     * @param {Number} min
     * @param {Number} max
     * @param {String} name - Unique name to be used for localStorage key
     * 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive | Getting a random integer between two values, inclusive}
     */
    function randomNumber(min = 0, max, name = "not-found:previousNumber") {
        min = Math.ceil(min)
        max = Math.floor(max)
        let number = Math.floor(Math.random() * (max - min + 1) + min)
        const previousNumber = Number(localStorage.getItem(name))

        while (previousNumber === number) {
            console.log('while previous: ', previousNumber)
            number = Math.floor(Math.random() * (max - min + 1) + min)
            console.log('while new: ', number)
        }

        localStorage.setItem(name, number.toString())
        return number
    }

    if (browser) {
        promise = fetch(`/img/ui/suisei-not-found-${randomNumber(0, 1)}.svg`).then(async (response) => await response.text())
    }
</script>

<section class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20 dark:text-white dark:bg-slate-900">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-6 space-y-4">
        <h1 class="font-zenless-title text-4xl md:text-5xl py-2">{$page.status}: {$page.error?.message}</h1>
        <p class="font-zenless-copy text-2xl text-pretty">The site renovation is still in progress and some links are unfortunately broken at the moment. <a href="/" class="text-tulip-tree-400 outline-none hover:underline focus:underline">Take me home</a></p>
        <div class="w-full flex items-center justify-center dark:text-slate-900">
            <div class="bg-white w-[min-content] h-[min-content]">
                {#await promise then image}
                    {@html image}
                {/await}
            </div>
        </div>
    </div>
</section>
