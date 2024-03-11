<script>
    /**
     * Thinking on ways to solve GLITCH effects
     * - AdamArgyle
     * https://www.youtube.com/watch?v=MR7dClW6iBg
     * https://gui-challenges.web.app/glitch/dist/
     */

    /**
     * Generate random css glitch effect via keyframes
     * 
     * @returns {String} css keyframes string
     */
    function glitchyPaths() {
        return `
        @keyframes cyberpunk-glitch {
            0%  { clip-path: polygon(${punkyPolygons()}); }
            4%  { clip-path: polygon(${punkyPolygons()}); }
            27% { clip-path: polygon(${punkyPolygons()}); }
            51% { clip-path: polygon(${punkyPolygons()}); }
            66% { clip-path: polygon(${punkyPolygons()}); }
            91% { clip-path: polygon(${punkyPolygons()}); }

            1%, 5%, 28%, 53%, 67%, 92% {
                clip-path: none;
            }
        }
        `.trim()
    }

    /**
     * @returns {String} css clip-path polygon string value
     */
    function punkyPolygons() {
        const collection = new Set()

        for (let i = 0; i <= 25; i++)
            collection.add(`${randomZeroToHundred()}% ${randomZeroToHundred()}%`)
        
        return Array.from(collection.values()).join(',')
    }

    /**
     * Just a normal randomizer from 0 - 100
     */
    function randomZeroToHundred() {
        return (Math.random() * 100).toFixed()
    }
</script>

<a href="/" draggable="false" class="logo group md:-rotate-90 text-indigo-500 dark:text-indigo-200 outline-none {$$props.class}">
    <h1 class="logo-text uppercase text-right font-zenless-logo tracking-wider whitespace-nowrap italic px-4 transition-all duration-300">lnfel's Room</h1>
</a>

<style>
    /* https://www.amitmerchant.com/animated-gradient-effect-in-css/ */
    /* https://web.dev/articles/speedy-css-tip-animated-gradient-text */
    .logo-text {
        font-size: clamp(1.875rem, 1.875rem + 2.3438vw, 3rem);
        color: transparent; /** text-fill-color also works but it is not detected as valid css by IDE/svlete... */
        background: linear-gradient(45deg, #e4b124 47%, #ffffff 49%, #ffffff 50%, #e4b124 52%);
        -webkit-background-clip: text;
        background-clip: text;
        /* -webkit-text-fill-color: transparent;
        text-fill-color: transparent; */
        background-size: 250% auto;
        /* animation: 1.5s ease-in-out forwards reflection-start,
        1.5s ease-in-out 1.5s forwards reflection-end; */
        /* writing-mode: vertical-lr; */
    }

    /* Cyberpunk glitch effect */
    @media (prefers-reduced-motion: no-preference) {
        .logo:hover .logo-text,
        .logo:focus .logo-text {
            animation:
                reflection 3s ease-in-out infinite,
                cyberpunk-glitch 2s step-end 5s forwards,
                skew-span 2s step-end 5s forwards,
                cyberpunk-glitch 7s step-end 7s infinite,
                skew-glitch 7s step-end 7s infinite;
        }

        @keyframes skew-glitch {
            0% { font-family: "cyberpunk"; font-size: clamp(1.5rem, 1.5rem + 1.0417vw, 2rem); text-transform: uppercase; letter-spacing: -0.05em; color: #e4b124; transform: skew(83deg, 2deg) scale(.25); }
            27% { transform: skew(-83deg, 2deg) scale(.25); }
            66% { transform: skew(93deg, -2deg) scale(.25); }
            91% { transform: skew(83deg, 2deg) scale(.25); }

            1%, 28%, 67%, 92% { transform: none; }
        }

        @keyframes cyberpunk-glitch {
            0%  { clip-path: polygon(29% 30%,35% 29%,96% 35%,27% 64%,42% 45%,52% 54%,40% 22%,8% 70%,18% 38%,35% 76%,34% 26%,25% 15%,9% 92%,68% 9%,52% 34%,34% 48%,50% 73%,84% 83%,65% 87%,53% 86%,60% 16%,65% 27%,32% 29%,80% 37%,21% 19%,24% 58%); }
            4%  { clip-path: polygon(80% 18%,92% 88%,99% 25%,99% 91%,48% 61%,40% 71%,22% 97%,86% 56%,74% 37%,10% 63%,51% 43%,30% 22%,35% 75%,77% 10%,66% 23%,48% 13%,76% 0%,64% 82%,43% 88%,29% 78%,12% 23%,80% 51%,84% 3%,53% 90%,66% 52%,63% 69%); }
            27% { clip-path: polygon(83% 9%,34% 76%,44% 5%,27% 26%,59% 71%,21% 41%,8% 84%,88% 40%,99% 46%,58% 87%,57% 53%,94% 76%,65% 33%,60% 38%,31% 28%,91% 19%,25% 98%,16% 29%,78% 4%,75% 81%,83% 88%,9% 48%,42% 14%,37% 78%,5% 40%,50% 44%); }
            51% { clip-path: polygon(94% 29%,50% 59%,73% 73%,76% 29%,88% 49%,40% 34%,92% 49%,45% 43%,61% 85%,86% 52%,43% 73%,28% 53%,11% 69%,19% 38%,43% 86%,46% 28%,53% 94%,32% 29%,32% 17%,100% 62%,78% 59%,93% 32%,42% 95%,62% 68%,20% 89%,50% 4%); }
            66% { clip-path: polygon(37% 55%,17% 86%,70% 34%,12% 63%,85% 31%,80% 19%,5% 65%,71% 38%,8% 48%,74% 38%,10% 58%,97% 5%,78% 17%,92% 61%,78% 49%,60% 25%,25% 39%,42% 84%,38% 67%,3% 23%,42% 66%,41% 25%,43% 28%,67% 16%,1% 12%,45% 67%); }
            91% { clip-path: polygon(73% 80%,73% 44%,95% 80%,44% 25%,59% 100%,74% 65%,41% 10%,70% 16%,36% 94%,82% 19%,79% 71%,94% 59%,93% 95%,81% 53%,19% 59%,97% 57%,51% 94%,22% 42%,91% 89%,39% 59%,89% 60%,13% 13%,52% 53%,64% 12%,73% 3%,80% 60%); }

            1%, 5%, 28%, 53%, 67%, 92% {
                clip-path: none;
            }
        }

        @keyframes skew-span {
            0% { color: #e4b124; transform: skew(83deg, 2deg) scale(.25); }
            27% { transform: skew(-83deg, 2deg) scale(.25); }
            66% { transform: skew(93deg, -2deg) scale(.25); }
            91% { transform: skew(83deg, 2deg) scale(.25); }

            1%, 28%, 67%, 92% { transform: none; }
        }

        @keyframes reflection {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    }

    @media (min-width: 768px) {
        @keyframes skew-glitch {
            0% { font-family: "cyberpunk"; text-transform: uppercase; letter-spacing: -0.05em; color: #e4b124; transform: skew(83deg, 2deg) scale(.25); }
            27% { transform: skew(-83deg, 2deg) scale(.25); }
            66% { transform: skew(93deg, -2deg) scale(.25); }
            91% { transform: skew(83deg, 2deg) scale(.25); }

            1%, 28%, 67%, 92% { transform: none; }
        }
    }
</style>