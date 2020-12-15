import { getParks, useParks } from "./nationalParksDataProvider.js"

const contentTarget = document.querySelector(".dropdowns")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        const selectedPark = changeEvent.target.value

        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasChosen: selectedPark
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const parkSelect = () => {
    getParks().then(() => {
        const parks = useParks()
        render(parks)
    })
}

const render = parkCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Please select a park...</option>
        ${
            parkCollection.map((park) =>
                `<option value=${park.id}>
                    ${park.fullName}
                </option>
                `)
        }
    </select>
    `
}