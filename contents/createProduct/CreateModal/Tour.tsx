import type { TourDay } from "./interface";
import ProductSteps from "./ProductSteps";

interface TourProps {
    productId: string;
    data: TourDay;
    updateTourDayStatus: (id: string, status: TourDay['status']) => void;
}

const Tour = (props: TourProps) => {
    const { productId, data, updateTourDayStatus } = props;


    return (
        <div style={{ padding: '8px 16px' }}>
            {data.id}
            <div>{data.status}</div>
            <ProductSteps productId={productId} />
        </div >
    )
}

export default Tour;