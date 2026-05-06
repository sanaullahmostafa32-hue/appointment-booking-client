const doctor = {
  name: "Dr. Md. Tanvir Rahman Chowdhury",
  specialization: "Medicine Specialist",
  degrees: "MBBS, BCS(Health), FCPS (Medicine)",
  designation: "ASSISTANT PROFESSOR",
  consultationTime: "Evening"
}

export default function DoctorInfo() {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{doctor.name}</h2>
      <div className="space-y-1 text-gray-600">
        <p className="text-lg font-semibold text-blue-700">{doctor.specialization}</p>
        <p className="text-sm text-gray-700">{doctor.degrees}</p>
        <p className="font-semibold text-gray-800 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{doctor.designation}</p>
        <p className="text-sm flex items-center justify-center gap-1">
          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">Consultation:</span> {doctor.consultationTime}
        </p>
      </div>
    </div>
  )
}
