import XOGameBoard from '@/components/modules/XOGame/XOGameBoard/XOGameBoard'

export default function Page() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-blue-400">Classic mode</p>
        <p className="text-gray-400 italic">First to get 3 in a row wins!</p>
      </div>
      <XOGameBoard />
    </div>
  )
}
