export const savedTripsHTMLConverter = (tripObject) => {
    return `
        <section class="trip">
            <div class="trip__park">Park: ${ tripObject.parkId }</div>
            <div class="trip__attraction">Attraction: ${ tripObject.attractionId }</div>
            <div class="trip__eatery">Eatery: ${ tripObject.eateryId }</div>
            <div class="trip__dateCreated">Date Created: ${ new Date(tripObject.dateCreated).toLocaleDateString('en-US')  }</div>
        </section>
    `
}