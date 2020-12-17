const eventHub = document.querySelector(".container")
let trips = []

const dispatchStateChangeEvent = () => {
    const tripsStateChangedEvent = new CustomEvent("tripsStateChanged")

    eventHub.dispatchEvent(tripsStateChangedEvent)
}

// retrieving notes data, turning into json, putting into notes array
export const getTrips = () => {
    return fetch('http://localhost:8088/savedTrips')
        .then(response => response.json())
        .then(parsedTrips => {
            trips = parsedTrips
        })

}

export const saveTrip = trip => {
    let stringifiedObj = JSON.stringify(trip)
    return fetch('http://localhost:8088/savedTrips', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getTrips)
    .then(dispatchStateChangeEvent)
}

export const useTrips = () => {
    return trips.slice()
}