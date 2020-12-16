import { getParks, useParks } from  "../parks/nationalParksDataProvider.js"
import { parkSelect } from "../parks/nationalParksSelect.js"
import { nationalParkHTMLConverter } from "../parks/nationalParkHTMLConverter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tripPreview")

eventHub.addEventListener("parkSelected", changeEvent => {
    if (changeEvent.detail.parkThatWasChosen !== "0") {
        const parks = useParks()
        const parkObject = parks.find( (park) => park.id === changeEvent.detail.parkThatWasChosen)
        const HTMLObject = nationalParkHTMLConverter(parkObject)
        contentTarget.innerHTML = HTMLObject
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