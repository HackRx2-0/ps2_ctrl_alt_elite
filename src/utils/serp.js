import axios from 'axios'

export default async function serp(q) {
    const url = `https://serpapi.com/search.json?q=${q}&tbm=shop&location=india&hl=en&gl=in&api_key=5d67a583b12201e266bd9792d688014f4892df464cad776a84fd764c97c76a2a&num=3`
    try {
        let res = await axios.get(url, {
            headers: {
            'User-Agent':	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36 Edg/91.0.864.71',
            'sec-ch-ua':	'" Not;A Brand";v="99", "Microsoft Edge";v="91", "Chromium";v="91"',
            'Accept':	'*/*',
            'Sec-Fetch-Site':	'none',
            'Sec-Fetch-Mode':	'cors',
            'Sec-Fetch-Dest':	'empty',
            'Accept-Encoding':	'gzip, deflate, br',
            'Accept-Language':	'en-US,en;q=0.9'
            }
        })
        return res['shopping_results']
    } catch (e) {
        return null
    }
}
