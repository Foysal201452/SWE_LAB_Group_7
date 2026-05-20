import DashboardLayout from "../../layouts/DashboardLayout";

function DoctorAppointments() {
  const appointments = [
    {
      id: 1,
      name: "Jami Hasan",
      age: 24,
      appointmentTime: "09:30 AM",
      status: "Waiting",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      age: 31,
      appointmentTime: "10:00 AM",
      status: "In Consultation",
    },
    {
      id: 3,
      name: "Farhan Ahmed",
      age: 42,
      appointmentTime: "10:45 AM",
      status: "Completed",
    },
    {
      id: 4,
      name: "Sadia Islam",
      age: 28,
      appointmentTime: "11:30 AM",
      status: "Waiting",
    },
    {
      id: 5,
      name: "Mehedi Rahman",
      age: 36,
      appointmentTime: "12:15 PM",
      status: "Emergency",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Completed") return "doctor-status completed";
    if (status === "In Consultation") return "doctor-status active";
    if (status === "Emergency") return "doctor-status emergency";
    return "doctor-status waiting";
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-prescription-page">
        <section className="doctor-prescription-hero">
          <div>
            <p className="doctor-breadcrumb">Doctor &gt; Appointments</p>
            <h1>Today’s Appointments</h1>
            <p>
              View patient appointment queue, consultation time, patient age,
              and current appointment status.
            </p>
          </div>

          <div className="prescription-hero-card">
            <h3>Appointment Queue</h3>
            <p>Manage today’s patient consultation list</p>
          </div>
        </section>

        <section className="doctor-dashboard-overview">
          <div className="doctor-queue-card">
            <div className="doctor-table-header">
              <div>
                <p className="doctor-small-label">Patient Queue</p>
                <h2>Doctor Appointment List</h2>
              </div>
            </div>

            <div className="doctor-table-wrapper">
              <table className="doctor-queue-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Appointment Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.appointmentTime}</td>
                      <td>
                        <span className={getStatusClass(patient.status)}>
                          {patient.status}
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

export default DoctorAppointments;