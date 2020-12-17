export const eateriesHTMLConverter = (eateries) => {
    return `
    <article class="preview__eateries">
        <h2 class="preview__eateriesName">Eateries Name: ${eateries.businessName}</h2>
        <button class="detailsButton" id="eateriesIdentifier--${eateries.id}">Details</button>
    </article>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    const [splitID, indexOne] = clickEvent.target.id.split("--")
    if ("eateriesIdentifier" === splitID) {
        const customEvent = new CustomEvent("eateriesDetailsButtonClicked", {
            detail: {
                eateriesDetailsChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

/*
S.R. only meant to return HTML string

 */