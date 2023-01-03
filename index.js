
// import modules
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

// create port and app 
const PORT = 3000
const app = express()

const URL = 'https://www.theguardian.com/world'
axios(URL)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
    })

app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})