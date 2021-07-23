import express from 'express'
import fetch from 'node-fetch'

const exp = express()

exp.use(express.json())
exp.use(express.urlencoded({ extended: true }))

exp.get('/serp/results', async function (req, res) {
    const url = `https://serpapi.com/search.json?q=${req.query.q}&tbm=shop&location=india&hl=en&gl=in&api_key=5d67a583b12201e266bd9792d688014f4892df464cad776a84fd764c97c76a2a&num=3`
    let results = await fetch(url)
    results = await results.json()
    res.set('Access-Control-Allow-Origin', '*')
    res.json(results)
})

exp.listen(8080, () => console.log('Running at 8080'))
