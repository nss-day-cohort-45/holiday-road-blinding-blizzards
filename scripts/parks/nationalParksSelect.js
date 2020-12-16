import { getParks, useParks } from "./nationalParksDataProvider.js"

const contentTarget = document.querySelector(".dropdowns__parks")
const eventHub = document.querySelector(".container")


// step 3: custom event for selection of park in dropdown
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

// step 1: invoking fetch function, invoking function that returns copy (.slice) of raw data
export const parkSelect = () => {
    getParks().then(() => {
        const parks = useParks()
        render(parks)
    })
}

// step 2: uses parks array to populate dropdown to have options for all parks in array
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