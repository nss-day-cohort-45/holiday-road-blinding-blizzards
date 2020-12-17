export const savedTripsHTMLConverter = (tripObject) => {
    return `
        <section class="trip">
            <div class="trip__park">Park: ${ tripObject.park }</div>
            <div class="trip__attraction">Attraction: ${ tripObject.attraction }</div>
            <div class="trip__eatery">Eatery: ${ tripObject.eatery }</div>
            <div class="trip__dateCreated">Date Created: ${ new Date(tripObject.dateCreated).toLocaleDateString('en-US')  }</div>
        </section>
    `
}