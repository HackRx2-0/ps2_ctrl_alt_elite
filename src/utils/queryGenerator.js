import removeWords from 'remove-words'

async function fetchJson(type) {
    try {
        const res = await fetch('/data/' + type + '.json')
        await res.json()

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
    let json = await fetchJson('electronics')
    const arr = JSON.parse(json)
    arr.some(v => {
        let regex = new RegExp(v)
        if (!!msg.match(regex)) {
            return removeWords(msg, true)
        } else return null
    })
}
