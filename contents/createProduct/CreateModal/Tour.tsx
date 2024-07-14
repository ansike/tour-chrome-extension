import type { TourDailyDescription } from "~/contents/createProduct/scripts/getProductBaseInfo";
import ProductSteps from './ProductSteps'
import type { TourDay } from "./interface";

interface TourProps {
    productId: string
    data: TourDay
    tourDailyDescriptions: TourDailyDescription[];
    updateTourDayStatus: (
        id: string,
        option: { status?: string; productId?: string }
    ) => void
}

const Tour = (props: TourProps) => {
    const { productId, data, updateTourDayStatus } = props

    return (
        <div style={{ padding: '8px 16px' }}>
            {data?.id}
            <div>
                {data?.productId ? data?.productId + ' | ' : ''}
                {data?.status}
            </div>
            <ProductSteps
                data={data}
                productId={productId}
                tourDailyDescriptions={[]}
                updateTourDayStatus={updateTourDayStatus}
            />
        </div>
    )
}

export default Tour
