import { TourDay } from './interface'
import ProductSteps from './ProductSteps'

interface TourProps {
  productId: string
  data: TourDay
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
