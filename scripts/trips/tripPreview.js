import { getParks, useParks } from  "../parks/nationalParksDataProvider.js"
import { parkSelect } from "../parks/nationalParksSelect.js"
import { nationalParkHTMLConverter } from "../parks/nationalParkHTMLConverter.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", changeEvent => {
    if (changeEvent.detail.parkThatWasChosen !== "0") {
        const parks = useParks()
        const parkObject = parks.find( (park) => park.id === parseInt(changeEvent.detail.parkThatWasChosen))
        return nationalParkHTMLConverter(parkObject)
    }
})

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