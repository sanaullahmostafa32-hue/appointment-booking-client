import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-4">
      <div className="luxury-card p-8 max-w-3xl w-full">
        <div className="text-center">
          <img
            src="/img/doctor.png"
            alt="Dr. Md. Tanvir Rahman Chowdhury"
            className="mx-auto mb-6 h-auto max-h-[40vh] w-auto object-contain image-glow"
          />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Dr. Md. Tanvir Rahman Chowdhury</h2>
          <div className="space-y-2 text-gray-600 mb-6">
            <p className="text-xl font-semibold text-blue-700">Medicine Specialist</p>
            <p className="text-sm text-gray-600">MBBS, BCS(Health), FCPS (Medicine)</p>
            <p className="font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">ASSISTANT PROFESSOR</p>
            <p className="text-sm flex items-center justify-center gap-1 text-gray-600">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Consultation:</span> Evening
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              to="/booking"
              className="luxury-button glow-blue px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition"
            >
              Book a serial
            </Link>
            <Link
              to="/login"
              className="luxury-button glow-gray px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-black transition"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
