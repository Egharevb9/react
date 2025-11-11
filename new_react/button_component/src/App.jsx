
import './App.css'

function Button() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col gap-4 items-center p-8">

      {/* Primary Button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
        Primary Button
      </button>

      {/* Secondary Button */}
      <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-50 transition">
        Secondary Button
      </button>

      {/* Danger Button */}
      <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
        Danger Button
      </button>

      {/* Success Button */}
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
        Success Button
      </button>

      {/* Large Button */}
      <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-purple-700 transition">
        Large Button
      </button>

      {/* Small Button */}
      <button className="bg-gray-600 text-white px-3 py-1 rounded-md font-semibold text-sm hover:bg-gray-700 transition">
        Small Button
      </button>

    </div>
  );
}

export default Button;