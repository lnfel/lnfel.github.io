<script>
    import { base } from "$app/paths"

    import Navigation from "$lib/components/Navigation.svelte"
    import Contact from "$lib/components/Contact.svelte"

    /** @type {App.Project[]} */
    const projects = [
        {
            title: 'Aerial',
            description: 'An app that extracts dominant colors in images and documents using k-means clustering algorithm.',
            imageURL: '/img/projects/aerial.webp',
            alt: 'Aerial demo',
            pageURL: '/projects/aerial',
            externalURL: 'https://github.com/lnfel/aerial'
        },
        {
            title: 'Lamy Debugbar',
            description: 'An elegant svelte debugbar inspired by laravel debugbar.',
            imageURL: '/img/projects/lamy-debugbar.webp',
            alt: 'Lamy Debugbar demo page',
            pageURL: '/projects/lamy-debugbar',
            externalURL: 'https://github.com/lnfel/lamy-debugbar'
        },
        {
            title: 'RGMTSI',
            description: 'Company portfolio of an industrial manufacturing equipment supplier.',
            imageURL: '/img/projects/rgmtsi.webp',
            alt: 'Machinery company website',
            pageURL: '/projects/rgmtsi',
            externalURL: 'https://rgmtsinc.com/'
        },
        {
            title: 'Vasta',
            description: 'Company portfolio of a travel agency in Batanes.',
            imageURL: '/img/projects/vasta.webp',
            alt: 'Vasta Travel and Tours company website',
            pageURL: '/projects/vasta',
            externalURL: 'https://lnfel.github.io/Vasta/'
        },
    ]
</script>

<Navigation />

<section id="about" class="w-screen h-[100dvh] shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-6 space-y-4">
        <h1 class="font-zenless-title text-4xl md:text-5xl py-2">About</h1>
        <!-- <p class="font-zenless-copy text-2xl">Hi my name is Dale and this is how I fell in love with web development.</p> -->
        <p class="font-zenless-copy text-2xl max-w-[60ch]">Welcome to my personal space, feel free to look around or scroll a bit more to see my recent projects.</p>
    </div>
</section>

<section id="projects" class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content relative w-full px-6 space-y-4">
        <h1 class="sticky top-0 z-10 w-full font-zenless-title text-4xl md:text-5xl dark:bg-slate-900 py-2">Projects</h1>
        <div class="max-h-[24rem] overflow-y-scroll">
            <div class="project-grid h-[max-content] grid grid-cols-1 lg:grid-cols-2 gap-4">
                {#each projects as project}
                    <a href={project.imageURL} data-pswp-width="2500" data-pswp-height="1200" class="project-card w-full h-[max-content] relative overflow-hidden select-none outline-none border border-slate-500">
                        <img loading="lazy" src={project.imageURL} alt={project.alt} draggable="false" class="project-card-img w-full object-cover">
                        <div class="project-card-title font-zenless-copy select-none px-4 py-4">
                            <div class="flex items-center justify-between">
                                <a href={project.pageURL} class="project-internal-link text-2xl outline-none hover:underline focus:underline hover:text-tulip-tree-400 focus:text-tulip-tree-400">{project.title}</a>
                                <a href={project.externalURL} target="_blank" draggable="false" class="project-external-link outline-none hover:text-tulip-tree-400 focus:text-tulip-tree-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                                </a>
                            </div>
                            <div class="project-description-wrapper">
                                <p class="project-card-description text-sm text-pretty">{project.description}</p>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        <!-- <div class="parallax-container relative">
            <div id="parallax" class="parallax" data-mouse-down-at="0" data-prev-percentage="0" data-scrolled-amount="0">
                {#each projects as project}
                    <a href={project.pageURL} draggable="false" class="parallax-link">
                        <div class="parallax-card select-none">
                            <img src={project.imageURL} alt={project.alt} draggable="false" class="parallax-card-img">
                            <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">{project.title}</span>
                        </div>
                    </a>
                {/each}
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/1/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <div class="parallax-card select-none">
                    <img src="https://picsum.photos/seed/2/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                    <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">Title</span>
                </div>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/3/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/4/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/5/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title font-zenless-copy select-none px-4 py-4">Title</span>
                    </div>
                </a>
            </div>
        </div> -->
    </div>
</section>

<section id="contact" class="w-screen h-screen shrink-0 md:flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-6 space-y-4">
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
</section>

<style>
    /* #parallax {
        width: max-content;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        gap: 1rem;
        will-change: left,transform;
    } */

    /* #parallax .parallax-card {
        position: relative;
        overflow: hidden;
        border-radius: .5rem;
    } */

    /* #parallax a {
        outline: none;
    } */

    /* #parallax .parallax-card-img {
        width: 40vmin;
        height: 56vmin;
        object-fit: cover;
        object-position: 100% 50%;
        will-change: object-position,transform;
        transition: all 500ms ease-in-out;
    } */

    /* #parallax .parallax-card-title{
        position: absolute;
        width: 100%;
        color: white;
        z-index: 2;
        bottom: 0;
        left: 0;
        padding-top: 2rem;
        background-image: linear-gradient(to top,rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.3) 70%, rgba(0,0,0, 0) 90%);
        transition: all 500ms ease-in-out;
    } */

    /* .parallax-card::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        transition: all 200ms ease-in-out;
    } */

    /* #parallax a:hover .parallax-card::before, #parallax a:focus .parallax-card::before {
        background-color: rgba(17,24,39, 0.5);
        transform: scale(1.1);
    } */

    /* #parallax a:hover .parallax-card img, #parallax a:focus .parallax-card img {
        transform: scale(1.1);
        transition: all 200ms ease-in-out;
    } */

    /* #parallax a:hover .parallax-card-title, #parallax a:focus .parallax-card-title {
        padding-bottom: 2rem;
        transition: all 200ms ease-in-out;
    } */

    /* Projects */
    .project-card-img {
        will-change: object-position,transform;
        transition: all 500ms ease-in-out;
    }

    .project-card-title {
        position: absolute;
        width: 100%;
        color: white;
        z-index: 2;
        bottom: 0;
        left: 0;
        padding-top: 2rem;
        background-image: linear-gradient(to top,rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.3) 70%, rgba(0,0,0, 0) 90%);
        transition: all 500ms ease-in-out;
    }

    .project-card::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        transition: transform 200ms ease-in-out;
    }

    .project-description-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 500ms ease-out;
    }

    .project-card-description {
        overflow: hidden;
    }

    .project-card:hover::before,
    .project-card:focus::before,
    .project-card:has(a.project-internal-link:hover)::before,
    .project-card:has(a.project-internal-link:focus)::before,
    .project-card:has(a.project-external-link:hover)::before,
    .project-card:has(a.project-external-link:focus)::before {
        transform: scale(1.1);
        background: url('/img/ui/pswp-fullscreen.svg'), rgba(17,24,39, 0.5);
        background-repeat: no-repeat;
        background-position: center;
    }

    .project-card:hover .project-description-wrapper,
    .project-card:focus .project-description-wrapper,
    .project-card:has(a.project-internal-link:hover) .project-description-wrapper,
    .project-card:has(a.project-internal-link:focus) .project-description-wrapper,
    .project-card:has(a.project-external-link:hover) .project-description-wrapper,
    .project-card:has(a.project-external-link:focus) .project-description-wrapper {
        grid-template-rows: 1fr;
        transition: grid-template-rows 200ms ease-out;
    }

    .project-card:hover .project-card-title {
        /* padding-bottom: 1.5rem; */
        transition: all 200ms ease-in-out;
    }

    .project-card:hover img, .project-card:focus img,
    .project-card:has(a.project-internal-link:hover) img,
    .project-card:has(a.project-internal-link:focus) img,
    .project-card:has(a.project-external-link:hover) img,
    .project-card:has(a.project-external-link:focus) img {
        transform: scale(1.1);
        transition: all 200ms ease-in-out;
    }

    :root {
        --github-fill: #181717;
        --gmail-fill: #EA4335;
        --discord-fill: #5865F2;
    }

    /* Contacts */
    :global(.contact.github:has(.contact-link:hover) > svg circle),
    :global(.contact.github:has(.contact-link:focus) > svg circle) {
        display: block;
    }
    :global(.contact.github:has(.contact-link:hover) > svg path),
    :global(.contact.github:has(.contact-link:focus) > svg path) {
        fill: var(--github-fill);
    }
    :global(.contact.gmail:has(.contact-link:hover) > svg path),
    :global(.contact.gmail:has(.contact-link:focus) > svg path) {
        fill: var(--gmail-fill);
    }
    :global(.contact.discord:has(.contact-link:hover) > svg path),
    :global(.contact.discord:has(.contact-link:focus) > svg path) {
        fill: var(--discord-fill);
    }
    :global(.contact:has(.contact-link:focus) button) {
        opacity: 1;
        pointer-events: auto;
    }
    :global(.contact:has(button:focus) button) {
        opacity: 1;
        pointer-events: auto;
    }
</style>
