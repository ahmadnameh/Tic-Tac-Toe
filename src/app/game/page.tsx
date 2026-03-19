import XOGameOverview from '@/components/modules/XOGame/XOGameOverview'
import SelectGameCarousel from '@/components/modules/SelectGameCarousel/SelectGameCarousel'

export default function page() {
  return (
    <div className="grid xl:grid-cols-2 items-center gap-x-10 gap-y-1 h-full">
      <XOGameOverview />
      <SelectGameCarousel />
    </div>
  )
}
