import { useParks, getParks } from "./nationalParksDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container")

// invoking fetch so we can pull details we want for the dialog box
export const nationalParkArray = () => {
    getParks().then(() => {
        const nationalParks = useParks()
        render(nationalParks)
    })
}

// 
const render = (parks) => {
    return contentTarget.innerHTML =
    `
        <dialog class="park">
            <h2 class="park__name">${parks.fullName}<h2>
            <div class="park__location">${parks.city}, ${parks.states}</div>
            <div class="park__description">${parks.description}
            <div class="park__entranceFee">${parks.entranceFees.cost}</div>
        </dialog>
    `

}


eventHub.addEventListener("parkDetailsButtonClicked", () => {
    const clicked
})