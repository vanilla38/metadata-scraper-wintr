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