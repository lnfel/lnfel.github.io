<script>
    import { base } from "$app/paths"

    import Navigation from "$lib/components/Navigation.svelte"

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

<section id="about" class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
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
                    <a href={project.imageURL} data-pswp-width="2500" data-pswp-height="1200" class="project-card w-full h-[max-content] relative overflow-hidden select-none outline-none">
                        <img src={project.imageURL} alt={project.alt} draggable="false" class="project-card-img w-full object-cover">
                        <div class="project-card-title font-zenless-copy select-none px-4 py-4">
                            <div class="flex items-center justify-between">
                                <a href={project.pageURL} class="project-internal-link text-2xl outline-none hover:underline focus:underline hover:text-tulip-tree-400 focus:text-tulip-tree-400">{project.title}</a>
                                <a href={project.externalURL} draggable="false" class="project-external-link outline-none hover:text-tulip-tree-400 focus:text-tulip-tree-400">
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
</style>
