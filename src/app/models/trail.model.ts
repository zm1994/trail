export class Trail {
    id: number;
    country: string;
    description: string;
    dog_allowed: boolean;
    elevation: number;
    good_for_kids: boolean;
    images?: string[];
    is_featured: boolean;
    is_one_day: boolean;
    latitude: number;
    length: number;
    level: string;
    links_reference?: string[]
    longitude?: number;
    type_trail: string;
    name: string;
    peak: number
    region: string;
    season_month_from: string;
    season_month_to: string;
    why_go: string;
}