import { TourDay } from './interface'
import ProductSteps from './ProductSteps'

interface TourProps {
  productId: string
  data: TourDay
  updateTourDayStatus: (id: string, status: string) => void
}

const Tour = (props: TourProps) => {
  const { productId, data, updateTourDayStatus } = props

  console.log({ data })
  return (
    <div style={{ padding: '8px 16px' }}>
      {data?.id}
      <div>{data?.status}</div>
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
