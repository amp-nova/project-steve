import fetch from 'cross-fetch'

async function fetchContent(requests) {
    let response
    response = await fetch(`https://1636f6erfnc901kemxrq59y3qr.staging.bigcontent.io/content/fetch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "parameters": {
                "depth": "all",
                "format": "inlined"
            },
            "requests": requests
        })
    })
    const responseJson = await response.json()
    return responseJson
}

export default fetchContent