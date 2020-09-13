'use strict'

const axios = require('axios')

module.exports = class Metascraper {
  constructor(apiKey) {
    this.outputSchema = {
      metas: {
        group: 'html > head > meta',
        data: {
          name: {
            selector: 'meta',
            attr: 'name'
          },
          property: {
            selector: 'meta',
            attr: 'property'
          },
          content: {
            selector: 'meta',
            attr: 'content'
          }
        }
      }
    }
    this.opts = {
      apikey: apiKey
    }
  }

  load(url, headers) {
    let params = {...this.opts, ...{ url: url, outputschema: this.outputSchema } }

    if (headers && typeof headers === 'object') {
      params.headers = headers
    }

    return new Promise((resolve, reject) => {
      axios({
        url: 'https://api.wintr.com/fetch',
        method: 'post',
        responseType: 'json',
        data: params
      })
      .then((result) => {
        let metas = result.data.content.metas.map((tag) => {
          let filteredTag = {}

          Object.keys(tag).forEach((key) => {
            if (tag[key] !== null) {
              filteredTag[key] = tag[key]
            }
          })

          return filteredTag
        }).filter((tag) => {
          return tag && Object.keys(tag).length
        })

        resolve(metas)
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
          err = err.response.data.error.message
        }

        reject(err)
      })
    })
  }
}