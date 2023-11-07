
const PORT = 9000
const axios = require('axios');
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


const url = 'https://www.hotnigerianjobs.com/alljobs/0/'


// app.get('/', (req, res) => {
//     res.json('This is my web scrapper')
// })

app.get('/', (req, res) => {
    axios(url)
    .then(response => {
        
        const html = response.data
        const $ = cheerio.load(html)
        const jobsTitles = []
       

        // $ sign grabs all the html
        $('.jobheader', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            const datePosted = $('span.semibio').text()
            // const description = $('div.mycase4').text()
            jobsTitles.push({
                title,
                url,
                datePosted,
                // description,
            })
        })
        // console.log(jobsDescription)
        res.json(jobsTitles)
        
    }).catch(err => console.log(err))
})



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`) )