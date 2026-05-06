import { useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorInfo from '../components/DoctorInfo'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.username === 'Admin' && formData.password === 'Admin123') {
      window.location.href = '/dashboard'
    } else {
      alert('Invalid credentials! Use Admin/Admin123')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-white">
          <img
            src="/img/doctor.png"
            alt="Dr. Md. Tanvir Rahman Chowdhury"
            className="mx-auto mb-8 h-auto max-h-[60vh] w-auto object-contain drop-shadow-2xl"
          />
          <DoctorInfo />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="w-full max-w-md">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-700 mb-6 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </Link>
            <div className="luxury-card p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Admin Login</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="luxury-input w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="luxury-input w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="luxury-button w-full py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-black transition shadow-gray-400"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
