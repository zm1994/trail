import { Airport } from './airport.model'

export class Route {
    departure: Airport;
    transfers?: Airport[];
    arrrival: Airport
}