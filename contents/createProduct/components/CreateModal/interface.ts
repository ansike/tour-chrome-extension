import type { TourDailyDescription } from "~contents/createProduct/components/scripts/getProductBaseInfo";

export interface TourDay {
    id: string;
    routes: TourDailyDescription[];
    status?: 'wait' | 'running' | 'succeed' | 'failed';
    title?: string;
    info?: string;
    productId?: string;
    currentStep: number;
    subProducts?: any[];
}