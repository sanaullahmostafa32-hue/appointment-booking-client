import { useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorInfo from '../components/DoctorInfo'
import CongratulationsModal from '../components/CongratulationsModal'

export default function Booking() {
  const [showCongrats, setShowCongrats] = useState(false)
  const [serialNumber, setSerialNumber] = useState('')
  const [patientName, setPatientName] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSerialNumber('01')
    setPatientName(formData.name)
    setShowCongrats(true)
    setFormData({ name: '', phone: '', age: '' })
  }

  const handleCloseCongrats = () => {
    setShowCongrats(false)
    setPatientName('')
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-white">
          <img
            src="/img/doctor.png"
            alt="Dr. Md. Tanvir Rahman Chowdhury"
            className="mx-auto mb-8 h-auto max-h-[60vh] w-auto object-contain drop-shadow-2xl"
          />
          <DoctorInfo />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full max-w-md">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </Link>
            <div className="luxury-card p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-center">
                Book an Appointment
              </h2>
              <p className="text-gray-600 mb-8 text-center">Schedule your appointment with Dr. Md. Tanvir Rahman Chowdhury</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-blue-300"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CongratulationsModal
        isOpen={showCongrats}
        serial={serialNumber}
        patientName={patientName}
        onClose={handleCloseCongrats}
      />
    </div>
  )
}
