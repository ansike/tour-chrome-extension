import type { TourDailyDescription } from "~/contents/createProduct/scripts/getProductBaseInfo";

export interface TourDay {
    id: string;
    routes: TourDailyDescription[];
    status?: 'wait' | 'running' | 'succeed' | 'failed';
    info?: string;
    productId?: string;
    currentStep: number;
}