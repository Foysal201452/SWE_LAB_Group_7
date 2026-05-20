import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([
    {
      appointment_id: 1,
      patient_name: "Jami Hasan",
      doctor_name: "Dr. Ahmed Rahman",
      scheduled_at: "2026-05-05 09:30 AM",
      status: "Pending",
      notes: "High fever",
    },
    {
      appointment_id: 2,
      patient_name: "Nusrat Jahan",
      doctor_name: "Dr. Farhan Islam",
      scheduled_at: "2026-05-05 10:30 AM",
      status: "Confirmed",
      notes: "Headache",
    },
    {
      appointment_id: 3,
      patient_name: "Sadia Islam",
      doctor_name: "Dr. Nusrat Jahan",
      scheduled_at: "2026-05-05 11:15 AM",
      status: "Pending",
      notes: "Regular checkup",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = appointments.map((item) =>
      item.appointment_id === id ? { ...item, status: newStatus } : item
    );

    setAppointments(updated);
    localStorage.setItem("receptionist_appointments", JSON.stringify(updated));
  };

  const getStatusClass = (status) => {
    if (status === "Confirmed") return "frontdesk-status confirmed";
    if (status === "Cancelled") return "frontdesk-status cancelled";
    return "frontdesk-status pending";
  };

  return (
    <DashboardLayout role="receptionist">
      <div className="frontdesk-page">
        <section className="frontdesk-hero">
          <div>
            <p className="frontdesk-label">Receptionist &gt; Appointments</p>
            <h1>Manage Appointments</h1>
            <p>
              Confirm, modify, or cancel patient appointments based on doctor
              availability and hospital scheduling.
            </p>
          </div>

          <div className="frontdesk-hero-card">
            <h3>Appointment Update</h3>
            <p>Changes are saved for front-desk workflow.</p>
          </div>
        </section>

        <section className="frontdesk-content">
          <div className="frontdesk-table-card">
            <div className="frontdesk-table-header">
              <div>
                <p className="frontdesk-label">Patient Schedule</p>
                <h2>Today’s Appointment List</h2>
              </div>
            </div>

            <div className="frontdesk-table-wrapper">
              <table className="frontdesk-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Schedule</th>
                    <th>Status</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments.map((item) => (
                    <tr key={item.appointment_id}>
                      <td>{item.appointment_id}</td>
                      <td>{item.patient_name}</td>
                      <td>{item.doctor_name}</td>
                      <td>{item.scheduled_at}</td>
                      <td>
                        <span className={getStatusClass(item.status)}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.notes}</td>
                      <td>
                        <div className="frontdesk-action-row">
                          <button onClick={() => updateStatus(item.appointment_id, "Confirmed")}>
                            Confirm
                          </button>
                          <button onClick={() => updateStatus(item.appointment_id, "Cancelled")}>
                            Cancel
                          </button>
                        </div>
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

export default ManageAppointments;