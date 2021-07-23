import removeWords from 'remove-words'

async function fetchJson(type) {
    try {
        const res = await fetch('/data/' + type + '.json')
        return await res.json()
    } catch (e) {
        return null
    }
}

/**
 *
 * @param {string} msg
 * @return {Promise<string|null>}
 */
export async function parseMessage(msg) {
    if (typeof msg === 'object') msg = msg.text
    let arr = await fetchJson('electronics')
    console.log(msg)
    let matches = arr.some(v => {
        let regex = new RegExp(v, 'igm')
        return (!!msg.match(regex))
    })

    return matches ? msg : null
}
