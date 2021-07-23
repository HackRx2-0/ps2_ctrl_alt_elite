export default async function serp(q) {
    const url = `http://localhost:8080/serp/results?q=` + q
    try {
        let res = await fetch(url)
        return res['shopping_results']
    } catch (e) {
        return null
    }
}
