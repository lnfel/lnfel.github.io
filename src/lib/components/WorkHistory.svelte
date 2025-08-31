<script>
    /** @type {{
     *  role: string
     *  company: string
     *  employment: {
     *      start: string
     *      end: string | null
     *  }
     *  descriptions: string[]
     * }}
     */
    export let workHistory

    /**
     * Formats a date string to "MMM YYYY" format.
     * 
     * @param {String} dateString
     */
    function formatDate(dateString) {
        const options = /** @type Partial<Intl.DateTimeFormatOptions> */ ({ year: 'numeric', month: 'short' });
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    /**
     * Format markdown links in a string to HTML anchor tags.
     * 
     * @param {String} text
     */
    function formatMarkdownLinks(text) {
        // text.match(/\[(?<label>[^\]]+)\]\((?<link>[^)]+)\)/)
        return text.replace(/\[(?<label>[^\]]+)\]\((?<link>[^)]+)\)/g, '<a href="$2" class="text-link" target="_blank">$1</a>');
    }

    /**
     * Format links in a string to HTML anchor tags.
     * 
     * @param {String} text
     */
    function formatLinks(text) {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlPattern, '<a href="$1" class="text-link" target="_blank">$1</a>');
    }

    /**
     * Format a string to HTML anchor tags for both markdown links and plain links.
     * 
     * @param {String} text
     */
    function formatTextToHTML(text) {
        const markdownLinkPattern = /\[(?<label>[^\]]+)\]\((?<link>[^)]+)\)/g
        if (markdownLinkPattern.test(text)) {
            return formatMarkdownLinks(text);
        }
        return formatLinks(text);
    }
</script>

<li class="work-history space-y-2 {$$props.class}">
    <div class="role font-zenless-title text-xl">
        {workHistory?.role}
    </div>
    <p class="company text-lg text-indigo-600">
        {workHistory.company} (<time datetime="{workHistory.employment.start}" class="start-date">{formatDate(workHistory.employment.start)}</time> – <time datetime="{workHistory.employment.end ?? (new Date()).toLocaleDateString("en-CA")}" class="end-date">{workHistory.employment.end ? formatDate(workHistory.employment.end) : "Present"}</time>)
    </p>
    <ul class="descriptions list-disc pl-6">
        {#each workHistory.descriptions as description}
            <li>{@html formatTextToHTML(description)}</li>
        {/each}
    </ul>
</li>
