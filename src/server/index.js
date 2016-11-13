import express from 'express'
import bodyParser from 'body-parser'
import wikiSearch from 'wikipedia-js'
import cheerio from 'cheerio'

const app = express()
const portNum = process.env.PORT || 8888

export default app

app.use(bodyParser.json())

app.get('/', (req, res) => {
  wikiSearch.searchArticle({
    query: 'data structures',
    format: 'html',
    summaryOnly: false,
  }, (err, htmlWikiText) => {
    if (err) {
      return res.send("An error occurred[query=%s, error=%s]", query, err)
    }
    let $ = cheerio.load(htmlWikiText)
    return res.send(htmlWikiText)
  })
})

app.listen(portNum, () => {
  if (!process.env.PORT) {
    console.log(`Serving port number ${portNum}`)
  }
})

