<script>
    import { base } from "$app/paths"

    import Navigation from "$lib/components/Navigation.svelte"
</script>

<Navigation />

<section id="about" class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content px-6 py-2 space-y-4">
        <h1 class="font-zenless-title text-4xl md:text-5xl">About</h1>
        <!-- <p class="font-zenless-copy text-2xl">Hi my name is Dale and this is how I fell in love with web development.</p> -->
        <p class="font-zenless-copy text-2xl max-w-[60ch]">Welcome to my personal space, feel free to look around or scroll a bit more to see my recent projects.</p>
    </div>
</section>

<section id="projects" class="w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20">
    <div class="md:w-[7rem]"></div>
    <div class="section-content w-full overflow-hidden px-6 py-2 space-y-4">
        <h1 class="font-zenless-title text-4xl md:text-5xl">Projects</h1>
        <div class="parallax-container relative">
            <div id="parallax" class="parallax" data-mouse-down-at="0" data-prev-percentage="0" data-scrolled-amount="0">
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/1/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <div class="parallax-card select-none">
                    <img src="https://picsum.photos/seed/2/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                    <span class="parallax-card-title select-none px-4 py-4">Title</span>
                </div>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/3/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/4/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/5/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/3/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/4/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
                <a href="/" draggable="false" class="parallax-link">
                    <div class="parallax-card select-none">
                        <img src="https://picsum.photos/seed/5/536/354" alt="Flavor text" draggable="false" class="parallax-card-img">
                        <span class="parallax-card-title select-none px-4 py-4">Title</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    #parallax {
        width: 100vw;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        gap: 4vmin;
        will-change: left,transform;
    }

    #parallax .parallax-card {
        width: 100%;
        position: relative;
        /* display: flex; Fixes uneven border-radius between top and bottom side */
        overflow: hidden;
        border-radius: .5rem;
    }

    #parallax a {
        width: 100%;
    }

    #parallax .parallax-card-img {
        width: 40vmin;
        height: 56vmin;
        object-fit: cover;
        object-position: 100% 50%;
        will-change: object-position,transform;
        transition: all 200ms ease-in-out;
    }

    #parallax .parallax-card-title {
        position: absolute;
        width: 100%;
        color: white;
        z-index: 2;
        bottom: 0;
        left: 0;
        padding-top: 2rem;
        background-image: linear-gradient(to top,rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.3) 70%, rgba(0,0,0, 0) 90%);
        transition: all 200ms ease-in-out;
    }

    .parallax-card::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        transition: all 200ms ease-in-out;
    }

    #parallax a:hover .parallax-card::before, #parallax a:focus .parallax-card::before {
        background-color: rgba(17,24,39, 0.5);
        transform: scale(1.1);
    }

    #parallax a:hover .parallax-card img, #parallax a:focus .parallax-card img {
        transform: scale(1.1);
    }
</style>
