import { getParks, useParks } from  "../parks/nationalParksDataProvider.js"
import { parkSelect } from "../parks/nationalParksSelect.js"
import { nationalParkHTMLConverter } from "../parks/nationalParkHTMLConverter.js"
import { getEateries, useEateries } from "../eateries/eateriesDataProvider.js"
import { eateriesHTMLConverter } from "../eateries/eateriesHTMLConverter.js"

const eventHub = document.querySelector(".container")
const contentTargetParks = document.querySelector(".tripPreview__parks")
const contentTargetAttractions = document.querySelector(".tripPreview__attractions")
const contentTargetEateries = document.querySelector(".tripPreview__eateries")

eventHub.addEventListener("parkSelected", changeEvent => {
    if (changeEvent.detail.parkThatWasChosen !== "0") {
        const parks = useParks()
        const parkObject = parks.find( (park) => park.id === changeEvent.detail.parkThatWasChosen)
        const HTMLObject = nationalParkHTMLConverter(parkObject)
        contentTargetParks.innerHTML = HTMLObject
    }
})

eventHub.addEventListener("eaterySelected", changeEvent => {
    if (changeEvent.detail.eateryThatWasChosen !== "0") {
        const eateries = useEateries()
        const eateryObject = eateries.find( (eatery) => eatery.id === parseInt(changeEvent.detail.eateryThatWasChosen))
        const HTMLObject = eateriesHTMLConverter(eateryObject)
        contentTargetEateries.innerHTML = HTMLObject
    }
})

export const pageLoadCard = () => {
    return contentTarget.innerHTML = `
    <h4>card here</h4>
    `
}

export const parkList = () => {
    getParks()
        .then(() => {
            let parkArray = useParks()
            render(parkArray)
        })
}

const render = (parks) => {
    let parkCards = []

    for (const park of parks) {
        parkCards.push()
    }
}

/*
- Park selected from dropdown
- Put name into itinerary preview 
*/