import type { TourDailyDescription } from "~/contents/createProduct/scripts/getProductBaseInfo";

export interface TourDay {
    id: string;
    routes: TourDailyDescription[];
    status?: string;
    productId?: string;
}