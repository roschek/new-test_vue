const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio'
const API_KEY = '43b7e62f8b5e35438a657ce267979f961dcb9670'

export const fetchData = person => {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + API_KEY
        },
        body: JSON.stringify({query: person})
    }

    return fetch(url, options)
        .then(response => response.text())
        .then(result => {
            const fetchData = JSON.parse(result)
            return fetchData
        })
        .catch(error => console.log("error", error))
}

