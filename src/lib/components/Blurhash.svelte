<script>
    export let src = ''
    export let alt = ''
    export let width = 100
    export let height = 100

    /** @type {HTMLImageElement} */
    let img

    function fade() {
        setTimeout(() => {
            img.classList.remove('opacity-0')
        }, 1000)
    }
</script>

<img bind:this={img} on:load={fade} {src} {alt} {width} {height} loading="lazy" class="{$$props.class}" {...$$restProps}>
