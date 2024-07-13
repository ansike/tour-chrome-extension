import type { TourDay } from "./interface";

interface TourProps {
    data: TourDay;
    updateTourDayStatus: (id: string, status: TourDay['status']) => void;
}

const Tour = (props: TourProps) => {
    const { data, updateTourDayStatus } = props;

    
    return (
        <div style={{ padding: '8px 16px' }}>
            {data.id}
            <div>{data.status}</div>
        </div >
    )
}

export default Tour;