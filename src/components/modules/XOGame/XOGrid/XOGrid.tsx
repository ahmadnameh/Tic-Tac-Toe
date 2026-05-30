import { TXOCellValue } from '@/types/types'
import XOCell from './XOCell'

export default function XOGrid({
  gridState,
  handleCellClick,
}: {
  gridState: TXOCellValue[][]
  handleCellClick: (rowIndex: number, colIndex: number) => void
}) {
  return (
    <div className="w-[270px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] grid grid-cols-3 gap-1 mx-auto">
      {gridState.map((row, rowIndex) =>
        row.map((column, colIndex) => (
          <div onClick={() => handleCellClick(rowIndex, colIndex)} key={`${rowIndex}-${colIndex}`}>
            <XOCell type={column} />
          </div>
        )),
      )}
    </div>
  )
}
