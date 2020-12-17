export const nationalParkHTMLConverter = (park) => {
    return `
    <article class="preview__nationalPark">
        <h2 class="preview__parkName">Park: ${park.fullName}</h2>
        <button class="detailsButton" id="parkIdentifier--${park.id}">Details</button>
    </article>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    const [splitID, indexOne] = clickEvent.target.id.split("--")
    if ("parkIdentifier" === splitID) {
        const customEvent = new CustomEvent("parkDetailsButtonClicked", {
            detail: {
                parkDetailsChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

/*
S.R. only meant to return HTML string

 */