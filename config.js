module.exports  = {
    base: 'https://vinciu.com/', // base url of the website
    urls: [
        'https://vinciu.com/aplicar' // URLs to scan (works only if autoCrawl is false)
    ],
    strictPresence: 'https://vinciu.com/', // Crawl links only if this is present
    ignoreStrings: [ // Ignore any link with this string
        'img.',
        'styles.',
        'm.me'
    ],
    autoCrawl: true, // Automatically crawl through internal links and create a sitemap
    crawlLevel: 2,
    pageLoad: {
        waitUntil: 'networkidle0', // puppeteer config
        timeout: 3000000
    },
    disableHashRoutes: true,
    sortBy: 'asc' // 'asc' | 'dsc' | 'none'
}