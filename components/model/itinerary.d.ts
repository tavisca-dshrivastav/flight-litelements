import { TravelFlightInfo } from './travelFlightInfo';
export interface Itinerary {
    arrival: TravelFlightInfo;
    departure: TravelFlightInfo;
    duration: String;
    stopInformation: String;
}
export interface ItineraryConstructor {
    clone(): Itinerary;
}
export declare var Itinerary: ItineraryConstructor;
//# sourceMappingURL=itinerary.d.ts.map