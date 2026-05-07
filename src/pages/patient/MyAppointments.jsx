import DashboardLayout from "../../layouts/DashboardLayout";
import PatientHero from "../../components/PatientHero";

function MyAppointments() {
  const appointments = [
    {
      appointment_id: 1,
      doctor_name: "Dr. Farhan Ishraq Jami",
      specialization: "Cardiologist",
      scheduled_at: "2026-05-02 10:30 AM",
      status: "Pending",
      notes: "Chest pain and breathing issue",
    },
    {
      appointment_id: 2,
      doctor_name: "Dr. Nusrat Jahan",
      specialization: "Neurologist",
      scheduled_at: "2026-05-05 12:00 PM",
      status: "Confirmed",
      notes: "Frequent headache",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Confirmed") return "status-badge status-confirmed";
    if (status === "Cancelled") return "status-badge status-cancelled";
    return "status-badge status-pending";
  };

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <PatientHero
          label="Appointment Status"
          title="My Appointments"
          description="Track your appointment requests and confirmation status."
          icon="📞"
        />

        <section className="patient-container">
          <div className="patient-table-card">
            <table className="patient-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Schedule</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.appointment_id}>
                    <td>{appointment.appointment_id}</td>
                    <td>{appointment.doctor_name}</td>
                    <td>{appointment.specialization}</td>
                    <td>{appointment.scheduled_at}</td>
                    <td>
                      <span className={getStatusClass(appointment.status)}>
                        {appointment.status}
                      </span>
                    </td>
                    <td>{appointment.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default MyAppointments;