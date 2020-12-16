import { useAttractions, getAttractions } from "./attractionsDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container")

// invoking fetch so we can pull details we want for the dialog box
export const attractionArray = () => {
    getAttractions().then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}

// 
const render = (attraction) => {
    return contentTarget.innerHTML =
        `
        <dialog class="attraction">
            <h2 class="attraction__name">${attraction.fullName}<h2>
            <div class="attraction__location">${attraction.city}, ${attraction.state}</div>
            <div class="attraction__description">${attraction.description}</div>
            <div class="attraction__ameneties">Amenities: 
                <div class="attraction__souvenir">Souvenirs: ${attraction.ameneties.souvenirs ? "✅" : "🚫"} </div>
                <div class="attraction__restroom">Restrooms: ${attraction.ameneties.restrooms ? "✅" : "🚫"} </div>
            </div>
        </dialog>
    `

}


eventHub.addEventListener("attractionDetailsButtonClicked", () => {
    const clicked
})