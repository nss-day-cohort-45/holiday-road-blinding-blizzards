import { parkSelect } from "./parks/nationalParksSelect.js"
import { eaterySelect } from "./eateries/eateriesSelect.js"
import { pageLoadCard } from "./trips/tripPreview.js"
import { attractionSelect } from "./attractions/attractionsSelect.js"
import { saveTripButton } from "./trips/saveTripButton.js"
import { saveTrip } from "./trips/savedTripsDataProvider.js"


import "./attractions/attractionDetailsComponent.js"
import "./eateries/eateriesDetailsComponent.js"
import "./parks/nationalParkDetailsComponent.js"
import "./trips/savedTripsList.js"




eaterySelect();
parkSelect();
pageLoadCard();
attractionSelect();
saveTripButton()
saveTrip()