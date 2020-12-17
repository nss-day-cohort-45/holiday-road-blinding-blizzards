import { useParks, getParks } from "./nationalParksDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parksDialog")

eventHub.addEventListener("parkDetailsButtonClicked", (event) => {
    const clickedPark = useParks().find(
        (park) => park.id === event.detail.parkDetailsChosen
    )
    contentTarget.showModal()
    render(clickedPark)
})

const render = (clickedPark) => {
    contentTarget.innerHTML = `
    <ul class="park">
<h4 class="park__name">${clickedPark.fullName}<h4>
<li class="park__location">Location: ${clickedPark.states}</li>
<li class="park__description">Description: ${clickedPark.description}</li>
    <li class="park__cost"> Fee: ${clickedPark.entranceFees[0].cost}</li>
<button id="close_park">Close</button
</ul>
`
}

eventHub.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.id === "close_park") {
            contentTarget.close()
        }
    })
    // invoking fetch so we can pull details we want for the dialog box
    // export const nationalParkArray = () => {
    //     getParks().then(() => {
    //         const nationalParks = useParks()
    //         render(nationalParks)
    //     })
    // }

// // 
// const render = (parks) => {
//     return contentTarget.innerHTML =
//     `
//         <dialog class="park">
//             <h2 class="park__name">${parks.fullName}<h2>
//             <div class="park__location">${parks.city}, ${parks.states}</div>
//             <div class="park__description">${parks.description}
//             <div class="park__entranceFee">${parks.entranceFees.cost}</div>
//         </dialog>
//     `

// }


// eventHub.addEventListener("parkDetailsButtonClicked", () => {
//     const clicked
// })