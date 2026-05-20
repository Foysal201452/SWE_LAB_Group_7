import DashboardLayout from "../../layouts/DashboardLayout";

function DoctorAvailability() {
  const availability = [
    {
      doctor_id: 1,
      name: "Dr. Ahmed Rahman",
      specialization: "Medicine Specialist",
      available_day: "Sunday - Thursday",
      time: "09:00 AM - 01:00 PM",
      status: "Available",
    },
    {
      doctor_id: 2,
      name: "Dr. Nusrat Jahan",
      specialization: "Neurologist",
      available_day: "Monday - Wednesday",
      time: "10:00 AM - 02:00 PM",
      status: "Available",
    },
    {
      doctor_id: 3,
      name: "Dr. Farhan Islam",
      specialization: "Cardiologist",
      available_day: "Saturday - Tuesday",
      time: "04:00 PM - 08:00 PM",
      status: "Limited",
    },
  ];

  return (
    <DashboardLayout role="receptionist">
      <div className="frontdesk-page">
        <section className="frontdesk-hero">
          <div>
            <p className="frontdesk-label">Receptionist &gt; Doctor Availability</p>
            <h1>Doctor Availability</h1>
            <p>
              Check available doctors and time slots before confirming patient
              appointments.
            </p>
          </div>

          <div className="frontdesk-hero-card">
            <h3>Schedule Support</h3>
            <p>Used for appointment coordination.</p>
          </div>
        </section>

        <section className="frontdesk-content">
          <div className="frontdesk-table-card">
            <div className="frontdesk-table-wrapper">
              <table className="frontdesk-table">
                <thead>
                  <tr>
                    <th>Doctor ID</th>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Available Day</th>
                    <th>Time Slot</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {availability.map((doctor) => (
                    <tr key={doctor.doctor_id}>
                      <td>{doctor.doctor_id}</td>
                      <td>{doctor.name}</td>
                      <td>{doctor.specialization}</td>
                      <td>{doctor.available_day}</td>
                      <td>{doctor.time}</td>
                      <td>
                        <span className="frontdesk-status confirmed">
                          {doctor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default DoctorAvailability;