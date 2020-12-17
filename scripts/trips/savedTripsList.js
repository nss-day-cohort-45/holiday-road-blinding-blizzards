import { getTrips, useTrips } from "./savedTripsDataProvider.js"
import { savedTripsHTMLConverter } from "./savedTripsHTMLConverter.js"

import { getAttractions, useAttractions } from "../attractions/attractionsDataProvider.js"
import { getEateries, useEateries } from "../eateries/eateriesDataProvider.js"
import { getParks, useParks } from "../parks/nationalParksDataProvider.js"

let eateries = [];
let parks = [];
let attractions = [];

getEateries().then(() => {
    eateries = useEateries()
  });

  getParks().then(() => {
    parks = useParks()
  });

getAttractions().then(() => {
    attractions = useAttractions()
  });

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
        (trip) => { 
            const eateryFound = eateries.find( (eatery) => eatery.id === trip.eateryId)
            const attractionFound = attractions.find( (attraction) => attraction.id === trip.attractionId)
            const parksFound = parks.find( (park) => park.id === trip.parkId)

            const newTripObject = {
                park: parksFound.fullName,
                attraction: attractionFound.name,
                eatery: eateryFound.businessName,
                date: trip.dateCreated
            }
            return savedTripsHTMLConverter(newTripObject)
        }
        ).join("")

    contentTarget.innerHTML = allTripsConvertedToStrings
}


