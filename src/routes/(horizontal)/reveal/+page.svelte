<script>
    import "../../../../node_modules/reveal.js/dist/reveal.css"
    import "../../../../node_modules/reveal.js/dist/theme/black.css"

    import { onMount } from "svelte"
    // import Reveal from "reveal.js"

    import { projects, languages, metaFramework, tooling } from "$lib/content"

    import Navigation from "$lib/components/Navigation.svelte"
    import Contact from '$lib/components/Contact.svelte'

    /** @type {Reveal.Api} */
    let deck
    onMount(async () => {
        const Reveal = (await import('reveal.js')).default
        deck = new Reveal({
            // view: 'scroll',
            progress: false,
            showSlideNumber: 'print',
            // scrollActivationWidth: 0
        })
        deck.initialize()
    })
</script>

<Navigation />

<section id="about" class="w-screen h-[100dvh] shrink-0 flex px-4 py-6 pt-[9rem] md:p-0">
    <div class="md:w-[7rem]"></div>
    <div class="w-full">
        <div class="reveal">
            <div class="slides">
                <section class="">About</section>
                <section>Technologies and development tools I am familiar with</section>
            </div>
        </div>
        <!-- <div class="section-content md:flex gap-96 h-[max-content] px-6 md:p-20">
            <article class="space-y-2">
                <h1 class="w-full font-zenless-title text-4xl md:text-5xl dark:bg-slate-900 py-2">About</h1>
                <p class="font-zenless-copy text-xl leading-normal max-w-[60ch]">
                    Hey there, I'm Dale and welcome to my room. Feel free to look around or scroll a bit more to see my recent projects.
                </p>
            </article>

            <article class="space-y-2">
                <h2 class="w-full font-zenless-title text-2xl md:text-3xl dark:bg-slate-900 py-2">Technologies and development tools I am familiar with</h2>
                <p class="font-zenless-copy text-xl leading-normal max-w-[60ch]">
                    Here are a list of languages and technologies that I am familiar and worked with in the past up until now:
                </p>
                <div class="pt-2 space-y-2">
                    <h3 class="font-zenless-title text-lg">Languages</h3>
                    <ul class="font-zenless-copy flex flex-wrap items-center gap-2 text-xl leading-normal max-w-[60ch]">
                        {#each languages as language}
                            <li class="flex items-center gap-2 leading-none {language.bgColor} {language.textColor} px-2 py-1">
                                <span>{ language.name }</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="pt-2 space-y-2">
                    <h3 class="font-zenless-title text-lg">Meta framework</h3>
                    <ul class="font-zenless-copy flex flex-wrap items-center gap-2 text-xl leading-normal max-w-[60ch]">
                        {#each metaFramework as framework}
                            <li class="flex items-center gap-2 leading-none {framework.bgColor} {framework.textColor} px-2 py-1">
                                <span>{ framework.name }</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="pt-2 space-y-2">
                    <h3 class="font-zenless-title text-lg">Tooling</h3>
                    <ul class="font-zenless-copy flex flex-wrap items-center gap-2 text-xl leading-normal max-w-[60ch]">
                        {#each tooling as tool}
                            <li class="flex items-center gap-2 leading-none {tool.bgColor} {tool.textColor} px-2 py-1">
                                <span>{ tool.name }</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </article>

            <article class="space-y-2">
                <h2 class="sticky top-0 z-10 w-full font-zenless-title text-2xl md:text-3xl dark:bg-slate-900 py-2">How I fell in love with web development</h2>
                <p class="font-zenless-copy text-xl leading-normal max-w-[60ch]">
                    It started as a hobby in 2007 writing CSS to customize Friendster profiles then came a thirst for something more.
                    I found myself reading about HTML, CSS, JQuery and how to write an index.html file using notepad (yes JQuery is learnt before JavaScript).
                    Inspired by what I read and saw in CSS-Tricks and Codepen, it kept me going.
                    Later I learned Ruby language and it's framework Ruby on Rails. Obviously I went back writing plain html files because I could not comprehend MVC yet.
                    Fast-forward in 2018 where I finally decided to have web development as career for a lifetime.
                </p>
            </article>
        </div> -->
    </div>
</section>

<section id="contact" class="w-screen h-screen shrink-0 md:flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="md:flex items-center">
        <div class="section-content h-[29rem] px-6 space-y-4">
            <h1 class="font-zenless-title text-4xl md:text-5xl py-2">Contact</h1>
            <p class="font-zenless-copy text-2xl max-w-[60ch]">Need a person on your team? Hit me up on my socials!</p>
            <div class="py-4">
                <ul class="contact-container font-zenless-copy md:text-2xl space-y-4">
                    <Contact name="github" text="github.com/lnfel" href="https://github.com/lnfel">
                        <svg slot="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-10 md:h-10">
                            <title>GitHub</title>
                            <circle class="hidden group-hover:block" cx="12.5" cy="12.5" r="11" fill="white"/>
                            <path fill="currentColor" class="group-hover:fill-[#181717]" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </Contact>
                    <Contact name="gmail" text="bk2o1.syndicates@gmail.com" href="mailto:https://github.com/lnfel">
                        <svg slot="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-10 md:h-10">
                            <title>Gmail</title>
                            <path fill="currentColor" class="group-hover:fill-[#EA4335]" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                    </Contact>
                    <Contact name="discord" text="lnfel" href="#">
                        <svg slot="icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-10 md:h-10">
                            <title>Discord</title>
                            <path fill="currentColor" class="group-hover:fill-[#5865F2]" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                        </svg>
                    </Contact>
                </ul>
            </div>
        </div>
    </div>
</section>
