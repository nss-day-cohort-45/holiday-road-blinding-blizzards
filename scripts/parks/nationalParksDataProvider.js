let parks = []

export const useParks = () => parks.slice()

export const getParks = () => {
    return fetch("http://localhost:8088/nationalParks")
        .then(response => response.json())
        .then(
            parsedParks => {
                debugger
                parks = parsedParks
                console.table(parsedParks)
            }
        )
}

console.log(parks)