import { getEateries, useEateries } from "./eateriesDataProvider.js"

const contentTarget = document.querySelector(".dropdowns__eateries")
const eventHub = document.querySelector(".container")


// step 3: custom event for selection of park in dropdown
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "eateriesSelect") {
        const selectedEatery = changeEvent.target.value

        const customEvent = new CustomEvent("eaterySelected", {
            detail: {
                eateryThatWasChosen: selectedEatery
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

// step 1: invoking fetch function, invoking function that returns copy (.slice) of raw data
export const eaterySelect = () => {
    getEateries().then(() => {
        const eateries = useEateries()
        render(eateries)
    })
}

// step 2: uses parks array to populate dropdown to have options for all parks in array
const render = eateryCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="eateriesSelect">
        <option value="0">And finally - a place to eat!</option>
        ${
            eateryCollection.map((eatery) =>
                `<option value=${eatery.id}>
                    ${eatery.businessName} (${eatery.state})
                </option>
                `)
        }
    </select>
    `
}

/*
 - For render function there are two options (if adding HTML dropdowns in
    different modules.)
    1. += after .innerHTML otherwise an = will override each one 
    2. or add different <div>s in hardcoded HTML
*/