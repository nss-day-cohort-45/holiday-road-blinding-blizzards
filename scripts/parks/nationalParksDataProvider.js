export const getParks = () => {
    return fetch("http://localhost:8088/npsData/nationalParks")
        .then(response => response.json())
        .then(
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks
            }
        )
}
let parks = []

export const useParks = () => parks.slice()