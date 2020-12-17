import { getTrips, useTrips } from "./trips/savedTripsDataProvider.js"
import { savedTripsHTMLConverter } from "./trips/savedTripsHTMLConverter.js"

const contentTarget = document.querySelector(".savedTrips")
const eventHub = document.querySelector(".container")

export const tripList = () => {
    getTrips()
        .then(() => {
            const allTrips = useTrips()
            render(allTrips)
        })
}


eventHub.addEventListener("tripsStateChanged", () => {
        tripList()
    }
)

const render = (tripArray) => {
    const allTripsConvertedToStrings = tripArray.map(
        (trip) => savedTripsHTMLConverter(trip)).join("")

    contentTarget.innerHTML = allTripsConvertedToStrings
}


