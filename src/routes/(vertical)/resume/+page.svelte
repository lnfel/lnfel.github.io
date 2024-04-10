<script>
	import { onMount } from "svelte"
    import { afterNavigate } from "$app/navigation"

    afterNavigate(async (navigation) => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'instant'
        })
        const section = document.querySelector('section')
        if (section) {
            section.classList.remove('hidden-village')
        }
    })

    /** @type {any} */
    let html2pdf

    onMount(async () => {
        html2pdf = (await import('html2pdf.js')).default
        const pdfElement = document.querySelector('section .section-content')
        // html2pdf(pdfElement)
    })

    /**
     * @param {Date} startDate
     * @param {Date} endDate
     * 
     * @see {@link https://www.w3resource.com/javascript-exercises/javascript-date-exercise-49.php | Javascript date exercise 49}
     */
    function yearsPast(startDate, endDate) {
        // Calculate the difference in milliseconds between the two dates
        let diff = (startDate.getTime() - endDate.getTime()) / 1000
        // Convert the difference from milliseconds to days
        diff /= (60 * 60 * 24)
        // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
        return Math.abs(Math.round(diff / 365.25))
    }

    /**
     * @param {Date} startDate
     * @param {Date} currentDate
     */
    function monthsPast(startDate, currentDate) {
        const yearsPast = currentDate.getFullYear() - startDate.getFullYear()
        console.log(yearsPast)
        return Number(((yearsPast * 12) + (startDate.getMonth() - currentDate.getMonth())) / 12).toFixed()
    }

    async function print() {
        if (html2pdf) {
            const pdfElement = document.querySelector('section .section-content')
            pdfElement?.classList.toggle('printing')
            const options = {
                filename: 'file.pdf',
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            }
            await html2pdf().set(options).from(pdfElement).save()
            pdfElement?.classList.toggle('printing')
        }
    }
    function test() {
        const pdfElement = document.querySelector('section .section-content')
        pdfElement?.classList.toggle('printing')
    }
</script>

<!-- https://stackoverflow.com/questions/3341485/how-to-make-a-html-page-in-a4-paper-size-pages -->
<!-- https://alistapart.com/article/boom/ -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- on:mouseover={test} -->
<button on:click={() => window.print()} type="button" class="fixed bottom-4 md:bottom-auto md:top-4 right-4 z-30 bg-slate-400 text-white rounded outline-none hover:bg-tulip-tree-400 focus:bg-tulip-tree-400 p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer pointer-events-none"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
    <span class="sr-only">Print</span>
</button>

<section class="hidden-village shrink-0 md:flex px-4 py-6 pt-[9rem] md:p-0 md:pb-56 bg-white text-slate-900">
    <div class="md:w-[7rem]"></div>
    <!-- backdrop-blur-sm -->
    <div class="backrop">
        <!-- md:p-20 -->
        <div class="section-content px-4 md:pt-20 pb-[12rem] md:pb-[27.35rem] space-y-10">
            <div id="header" class="md:px-20">
                <div class="flex flex-col items-center gap-2">
                    <h1 class="font-zenless-title text-3xl md:text-5xl leading-none whitespace-nowrap">
                        Dale Ryan Aldover
                    </h1>
                    <span class="font-zenless-copy md:text-2xl uppercase tracking-[0.6em] leading-none whitespace-nowrap">
                        Web Developer
                    </span>
                </div>
            </div>

            <div id="summary" class="md:px-20 space-y-6">
                <h2 class="w-full font-zenless-title text-2xl md:text-3xl text-sky-500">
                    Summary
                </h2>
                <p class="font-zenless-copy text-xl text-pretty leading-normal max-w-[60ch]">
                    Full-stack Web Developer with {yearsPast(new Date('12-01-2018'), new Date())} years of progressive experience. Started web development as a hobby in 2007 and in 2019 I finally decided to have it as my career. Recently made <a href="https://github.com/lnfel/aerial" class="text-indigo-500">Aerial</a>, an sveltekit app that extracts dominant colors in documents, pdf and images using k-means clustering. During free time I tinker with Three js framework or get news on latest hapennings in web development space.
                </p>
            </div>

            <div id="recent-work" class="md:px-20 space-y-6">
                <h2 class="w-full font-zenless-title text-2xl md:text-3xl text-sky-500">
                    Recent Work
                </h2>
                <ul class="font-zenless-copy text-pretty max-w-[80ch] space-y-8">
                    <li class="space-y-2 break-inside-avoid">
                        <div class="font-zenless-title text-xl">
                            Full-stack Developer
                        </div>
                        <p class="text-lg text-indigo-600">
                            PingSailor (Jul 2022 – Mar 2024)
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Implemented Integrations Page on the existing PingSailor website that was done using Laravel and Vue.js stack</li>
                            <li>Built an API for managing Blog content</li>
                            <li>Implemented Secure Authentication for Blog Editor</li>
                            <li>Improved Lighthouse score to 90 by implementing optimization patterns and best practices</li>
                            <li>Implemented Continuous Integration and Delivery using Github Actions</li>
                            <li>Pioneered the company's second project called Ghostprinter, where I made an internal service I called Aerial that extracts dominant colors in images, and documents (mainly docx and pdf files). Rendered using Sveltekit</li>
                            <li>Implemented Ghostprinter back-end API using <a href="https://elysiajs.com/">ElysiaJS</a>, where I got a chance to be invited as one of the community ambassadors.</li>
                            <li>Aerial is publicly available: <a href="https://github.com/lnfel/aerial">https://github.com/lnfel/aerial</a></li>
                        </ul>
                    </li>

                    <li class="page-start space-y-2 break-inside-avoid">
                        <div class="font-zenless-title text-xl">
                            Laravel Full-stack Developer
                        </div>
                        <p class="text-lg text-indigo-600">
                            RGMTSI (Mar 2021 – Jan 2022)
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Built the company website from scratch using TALL (Tailwind, Alpinejs, Laravel, and Livewire) stack and Postgresql as production database</li>
                            <li>The web app is a CMS which is developer independent and can be customised by a non-developer staff</li>
                            <li>Implemented SEO (Search Engine Optimization) using Google Search Console and a combination of data structure implementation, mainly JSON-LD and RDFa</li>
                            <li>Implemented automation for various tasks needed for development</li>
                            <li>Implemented Continuous Integration and Delivery using Github Actions</li>
                            <li>RGMTSI site at: <a href="https://rgmtsinc.com">https://rgmtsinc.com</a></li>
                            <li>Repo is available publicly at: <a href="https://github.com/lnfel/rgmtsi-lamy">https://github.com/lnfel/rgmtsi-lamy</a></li>
                        </ul>
                    </li>

                    <li class="space-y-2 break-inside-avoid">
                        <div class="font-zenless-title text-xl">
                            Ruby on Rails Full-stack Developer
                        </div>
                        <p class="text-lg text-indigo-600">
                            Editmode (Aug 2020 – Nov 2020)
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Implemented Algolia search on existing Rails 4 app while working with a team of three to complete various improvements of the said app</li>
                            <li>Written a chrome extension to consume Atlas api, another project of Editmode similar to "Save to Pocket" chrome extension</li>
                            <li>Written another chrome extension that toggles seen tweets on Twitter, a pet project of my employer for personal use</li>
                            <li>Editmode site: <a href="https://editmode.com">https://editmode.com</a></li>
                        </ul>
                    </li>

                    <li class="space-y-2 break-inside-avoid">
                        <div class="font-zenless-title text-xl">
                            Ruby on Rails Full-stack Developer
                        </div>
                        <p class="text-lg text-indigo-600">
                            Semprove (Jul 2019 – Mar 2020)
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Re-built an old Rails up to modern standards</li>
                            <li>Implemented features to enhance overall user experience</li>
                            <li>Live development url: <a href="https://supost-test.herokuapp.com">https://supost-test.herokuapp.com</a> (Down ever since heroku removed their free-tier)</li>
                        </ul>
                    </li>

                    <li class="page-start space-y-2 break-inside-avoid">
                        <div class="font-zenless-title text-xl">
                            PHP Developer
                        </div>
                        <p class="text-lg text-indigo-600">
                            Mango System (Dec 2018 – Apr 2019)
                        </p>
                        <ul class="list-disc pl-6">
                            <li>Developed a CRM with DataTables Framework</li>
                            <li>Lead a team of developers for a pioneering project</li>
                            <li>Made company profile websites for the company’s clients</li>
                            <li>Sample of our work: <a href="https://lnfel.github.io/Vasta">https://lnfel.github.io/Vasta</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div id="contact" class="md:px-20 space-y-6 break-inside-avoid">
                <h2 class="w-full font-zenless-title text-2xl md:text-3xl text-sky-500">
                    Contact
                </h2>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-center gap-2">
                        <svg class="lucide lucide-smartphone text-rose-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                        <a href="tel:639106566376">+63 910-656-6376</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        <a href="https://github.com/lnfel">github.com/lnfel</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="lucide lucide-at-sign text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                        <a href="mailto:bk2o1.syndicates@gmail.com">bk2o1.syndicates@gmail.com</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="lucide lucide-laptop-minimal text-orange-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
                        <a href="https://lnfel.github.io">lnfel.github.io</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="text-[#0866FF]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><title>Facebook</title><path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                        <a href="https://facebook.com/lbk2o1l">facebook.com/lbk2o1l</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="text-[#5865F2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><title>Discord</title><path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                        <span>lnfel</span>
                    </div>
                </div>
            </div>
            <!-- <footer class="md:px-20">

            </footer> -->
        </div>
    </div>
</section>

<style lang="postcss">
    :root {
        counter-reset: section;
        counter-increment: page;
    }
    section {
        background-image: url(/img/resume/frieren-header.png),
            url(/img/resume/frieren-footer.png);
        background-repeat: no-repeat, no-repeat;
        background-size: 100% auto, 100% auto;
        background-position: top left, left 100%;
        will-change: background-position, opacity;
        transition: all 1.5s ease-in-out;
    }
    section.hidden-village {
        opacity: 0;
        background-position: top left, left 102%;
    }
    .section-content div {
        opacity: 0;
    }
    /* .backrop {
        background: linear-gradient(to right, transparent 0%, rgb(255 255 255 / 0.7) 10%, rgb(255 255 255 / 0.7) 90%, transparent 100%);
        border-radius: 1.5rem;
        overflow: hidden;
    } */
    li a {
        @apply text-emerald-600;
    }
    a {
        @apply hover:underline focus:underline;
    }
    /* :global(.section-content footer) {
        display: block!important;
        padding-top: 30rem;
        background-image: url(/img/resume/frieren-footer.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: top left;
    } */
    :global(.section-content.printing) {
        background-image: url(/img/resume/frieren-header.png),
            url(/img/resume/frieren-footer.png);
        background-repeat: no-repeat, no-repeat;
        background-size: 100% auto, 100% auto;
        background-position: top left, bottom left;
        /* background-image: url(/img/resume/frieren-header.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: top left; */
    }
    @page {
        @top-left {
            content: "Cascading Style Sheets";
        }
        @bottom-left {
            content: counter(page);
        }
    }
    @media print {
        :global(.no-print),
        :global(.md\:w-\[7rem\]),
        button {
            display: none!important;
        }
        .backrop {
            background: none;
        }
        /* .backdrop-blur-sm {
            backdrop-filter: none;
        } */
        .page-start {
            padding-top: 5rem;
        }
    }
</style>
