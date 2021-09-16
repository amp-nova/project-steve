import fetch from 'cross-fetch'

export async function fetchContent(requests) {
    let response
    // response = await fetch(`https://1636f6erfnc901kemxrq59y3qr.staging.bigcontent.io/content/fetch`, {
    response = await fetch(`https://machathon3.cdn.content.amplience.net/content/fetch`, {
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

export async function filterContent(request) {
    let response
    response = await fetch(`https://machathon3.cdn.content.amplience.net/content/filter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...request,
            "parameters": {
                "depth": "all",
                "format": "inlined"
            }
        })
    })
    const responseJson = await response.json()
    return responseJson
}