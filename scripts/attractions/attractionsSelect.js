import { getAttractions, useAttractions } from "./attractionsDataProvider.js"

const contentTarget = document.querySelector(".dropdowns__attractions")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "attractionSelect") {
        const selectedAttraction = changeEvent.target.value

        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                attractionThatWasChosen: selectedAttraction
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const attractionSelect = () => {
    getAttractions().then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}

const render = attractionCollection => {
        contentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Then an attraction</option>
        ${
            attractionCollection.map((attraction) =>
                `<option value=${attraction.id}>
                    ${attraction.name} (${attraction.state})
                </option>
                `)
        }
    </select>
    `
}