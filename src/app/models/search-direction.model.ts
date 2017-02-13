export class SearchDirection {
    departure_code: string;
    arrival_code?: string;

    constructor(departure: string, arrival:string) {
        this.departure_code = departure;
        this.arrival_code = arrival;
    }
}