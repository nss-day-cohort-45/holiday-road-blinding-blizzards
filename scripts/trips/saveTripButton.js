import { saveTrip } from "./savedTripsDataProvider.js"

const contentTarget = document.querySelector(".saveButtonContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <button id="saveTrip">Save Trip</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTrip") {
        const park = document.querySelector("#parkSelect").value
        const attraction = document.querySelector("#attractionSelect").value
        const eatery = document.querySelector("#eateriesSelect").value

        const newTrip = {
            parkId: park,
            attractionId: parseInt(attraction),
            eateryId: parseInt(eatery),
            dateCreated: Date.now()
        }

        saveTrip(newTrip)
    }
})

export const saveTripButton = () => {
    render()
}