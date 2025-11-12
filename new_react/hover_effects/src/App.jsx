
import './App.css'

function HoverExamples() {
  return (
    <div className='w-100 h-150  item-center bg-green-500 p-8 space-y-4'>
      <button className='bg-blue-500 hover:bg-blue-200 item-center text-white px6 py-3 rounded-lg'>Hover Me</button>
      <div className='bg-green-500 p-8 hover:scale-105 transition-shadow cursor-pointer'> Hover to scale</div>
      <div className='bg-white p-6 shadow hover:shadow-xl transition-shadow cursor-pointer'>hover for shadow</div>
      /*multiple hover effect  */
      <button className='bg-green-600 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1 transition-all text-white px-4 rounded-lg font-semibold'> Hover for multiple effectsc</button>
    </div>
  )
}
export default HoverExamples;

