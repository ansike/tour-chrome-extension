import type { TourDailyDescription } from "~/contents/createProduct/scripts/getProductBaseInfo";

export interface TourDay {
    id: string;
    status: 'init' | 'creating' | 'succeed' | 'failed';
    routes: TourDailyDescription[];
}