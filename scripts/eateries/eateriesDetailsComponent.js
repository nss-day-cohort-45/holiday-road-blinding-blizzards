import { useEateries } from "./eateriesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateriesDialog")


eventHub.addEventListener("eateriesDetailsButtonClicked", (clickEvent) => {
    const eateriesArray = useEateries()
    const eateryId = parseInt(clickEvent.detail.eateriesDetailsChosen)
    const foundEatery = eateriesArray.find(eatery => eatery.id === eateryId)
    contentTarget.showModal()
    render(foundEatery)
})

const render = (eateryObject) => {
    contentTarget.innerHTML = `
    <div id="dialog">
    <h4> ${eateryObject.businessName} </h4>
    <ul>
    <li>City: ${eateryObject.city}</li>
    <li>State: ${eateryObject.state}</li>
    <li>Description: ${eateryObject.description}</li>
    <li class="eateries__ameneties">Amenities: </li>
    <li class="attraction__wheelchairAccessible">Wheelchair Accessible: ${eateryObject.ameneties.wheelchairAccessible ? "✅" : "🚫"} </div>
    <li class="attraction__petFriendly">Pet Friendly: ${eateryObject.ameneties.petFriendly ? "✅" : "🚫"} </li>
    <li class="attraction__wifi">Wifi: ${eateryObject.ameneties.wifi ? "✅" : "🚫"} </li>
    <li class="attraction__diaperFacility">Diaper Facility: ${eateryObject.ameneties.petFriendly ? "✅" : "🚫"} </li>
    <li class="attraction__playground">Playground: ${eateryObject.ameneties.playground ? "✅" : "🚫"} </li>
    <li class="attraction__restrooms">Restrooms: ${eateryObject.ameneties.restrooms ? "✅" : "🚫"} </li>

    </ul>
    
   
    <button class="button--close" id="closeDialog">Close</button>
        </di>
        `
}






eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeDialog") {
        contentTarget.close();
    }
})