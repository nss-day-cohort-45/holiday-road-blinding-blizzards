export const attractionHTMLConverter = (attraction) => {
    return `
    <article class="preview__attraction">
        <h2 class="preview__attractionName">Attraction: ${attraction.name}</h2>
        <button class="detailsButton" id="attractionIdentifier--${attraction.id}">Details</button>
    </article>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    const [splitID, indexOne] = clickEvent.target.id.split("--")
    if ("attractionIdentifier" === splitID) {
        const customEvent = new CustomEvent("attractionDetailsButtonClicked", {
            detail: {
                attractionDetailsChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})