
import './App.css'

function FocusExamples() {
  return(
    <div className='p-8 space-y-4 max-w-md bg-blue-5000'>
      <input type="text" placeholder='focus on me' className=' w-full px-4 py-3 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none' />
      <textarea placeholder='"message' rows="4" className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none resize-none'></textarea>
    </div>
  );
}
export default FocusExamples;