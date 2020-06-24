import { TravelFlightInfo } from './travelFlightInfo.js';

export interface Itinerary {
  arrival: TravelFlightInfo;
  departure: TravelFlightInfo;
  duration: String;
  stopInformation: String;
}