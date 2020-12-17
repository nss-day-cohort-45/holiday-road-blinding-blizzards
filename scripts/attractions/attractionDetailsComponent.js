import { useAttractions, getAttractions } from "./attractionsDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractions__dialog")

// invoking fetch so we can pull details we want for the dialog box



eventHub.addEventListener("attractionDetailsButtonClicked", (clickEvent) => {
    const clickedAttraction = useAttractions().find(
        (attraction) => attraction.id === parseInt(event.detail.attractionDetailsChosen)
    )
    contentTarget.showModal()
    render(clickedAttraction) 
})

const render = (clickedAttraction) => {
    contentTarget.innerHTML = `
    <ul class="attraction">
<h4 class="attraction__name">${clickedAttraction.name}<h4>
<li class="attraction__location">Location: ${clickedAttraction.city}, ${clickedAttraction.state}</li>
<li class="attraction__description">Description: ${clickedAttraction.description}</li>
<li class="attraction__ameneties">Amenities: 
    <li class="attraction__souvenir">   Souvenirs: ${clickedAttraction.ameneties.souvenirs ? "✅" : "🚫"} </li>
    <li class="attraction__restroom">   Restrooms: ${clickedAttraction.ameneties.restrooms ? "✅" : "🚫"} </li>
</li>
<button id="close_attraction">Close</button
</ul>
`
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "close_attraction"){
        contentTarget.close()
    }
})




