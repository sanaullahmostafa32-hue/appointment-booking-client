import { useState } from 'react'
import { Link } from 'react-router-dom'

const sampleData = [
  { serial: 1, name: 'Mohammad Rahman', phone: '01712345678', age: 35 },
  { serial: 2, name: 'Fatima Khatun', phone: '01812345679', age: 28 },
  { serial: 3, name: 'Abdul Karim', phone: '01912345680', age: 42 },
  { serial: 4, name: 'Rabeya Sultana', phone: '01612345681', age: 30 },
  { serial: 5, name: 'Mohammad Ali', phone: '01512345682', age: 38 },
]

export default function Dashboard() {
  const [appointments, setAppointments] = useState(sampleData)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAppointment, setNewAppointment] = useState({ name: '', phone: '', age: '' })

  const handleDelete = (serial) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(prev => prev.filter(app => app.serial !== serial))
    }
  }

  const handleNewAppChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value
    })
  }

  const handleAddSubmit = (e) => {
    e.preventDefault()
    const maxSerial = appointments.length > 0 ? Math.max(...appointments.map(a => a.serial)) : 0
    const newSerial = maxSerial + 1
    setAppointments(prev => [...prev, {
      ...newAppointment,
      serial: newSerial,
      age: Number(newAppointment.age)
    }])
    setNewAppointment({ name: '', phone: '', age: '' })
    setShowAddForm(false)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 no-print">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage all appointments</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Print
            </button>
            <Link
              to="/login"
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </Link>
          </div>
        </div>

        <div className="mb-6 no-print">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {showAddForm ? 'Cancel' : 'Add New Appointment'}
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 no-print">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Appointment</h2>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAppointment.name}
                  onChange={handleNewAppChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={newAppointment.phone}
                  onChange={handleNewAppChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={newAppointment.age}
                  onChange={handleNewAppChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Add Appointment
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider border border-gray-300">
                    Serial Number
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider border border-gray-300">
                    Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider border border-gray-300">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider border border-gray-300">
                    Age
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider border border-gray-300 no-print">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.serial} className="hover:bg-blue-50 transition border-b border-gray-300">
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-gray-300">
                      <span className="text-lg font-bold text-blue-600">{appointment.serial}</span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-gray-800 font-medium border border-gray-300">
                      {appointment.name}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-gray-600 border border-gray-300">
                      {appointment.phone}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-gray-600 border border-gray-300">
                      {appointment.age} years
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-gray-300 no-print">
                      <button
                        onClick={() => handleDelete(appointment.serial)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {appointments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No appointments found</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center no-print">
          Total Appointments: <span className="font-bold text-blue-600">{appointments.length}</span>
        </div>
      </div>
    </div>
  )
}
