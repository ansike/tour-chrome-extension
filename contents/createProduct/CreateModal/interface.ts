import type { TourDailyDescription } from "~/contents/createProduct/scripts/getProductBaseInfo";

export interface TourDay {
    id: string;
    status: string;
    routes: TourDailyDescription[];
}