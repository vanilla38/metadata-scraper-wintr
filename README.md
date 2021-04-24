# Website metadata scraper powered by WINTR API
> **Extract any website's metadata**

### Get started

  - [Create an account](https://www.wintr.com/) on WINTR to get an API KEY
  - Visit your [WINTR account info dashboard](https://www.wintr.com/dashboard-account) and copy your API KEY

### Installation

```bash
$ npm install metadata-scraper-wintr
```

### Scrape website's metadata
```js
const Metascraper = require('metadata-scraper-wintr')
const scraper = new Metascraper('YOUR_WINTR_API_KEY')

scraper.load('WEBSITE_URL') // Example: https://github.com
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})

/*
PRINTS: 
[
  { name: 'viewport', content: 'width=device-width' },
  {
    name: 'description',
    content: 'GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.'
  },
  { property: 'fb:app_id', content: '1401488693436528' },
  { name: 'apple-itunes-app', content: 'app-id=1477376905' },
  {
    name: 'twitter:image:src',
    content: 'https://github.githubassets.com/images/modules/site/social-cards/github-social.png'
  },
  { name: 'twitter:site', content: '@github' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: 'GitHub: Where the world builds software'
  },
  {
    name: 'twitter:description',
    content: 'GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...'
  },
  {
    property: 'og:image',
    content: 'https://github.githubassets.com/images/modules/site/social-cards/github-social.png'
  },
  { property: 'og:site_name', content: 'GitHub' },
  { property: 'og:type', content: 'object' },
  {
    property: 'og:title',
    content: 'GitHub: Where the world builds software'
  },
  { property: 'og:url', content: 'https://github.com/' },
  ...
]
*/
```

### Scrape website's metadata with custom headers
```js
const Metascraper = require('metadata-scraper-wintr')
const scraper = new Metascraper('YOUR_WINTR_API_KEY')

scraper.load('WEBSITE_URL', { // Example: https://github.com
  "Accept-Language": "en-US,en;q=0.9,es;q=0.8",
  "Referer": "https://www.google.com"
})
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})
```
