import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import PatientHero from "../../components/PatientHero";

function BookAppointment() {
  const [formData, setFormData] = useState({
    doctor_id: "",
    scheduled_at: "",
    notes: "",
  });

  const doctors = [
    {
      doctor_id: 1,
      name: "Dr. Mehedi Hasan Foysal",
      specialization: "Cardiologist",
    },
    {
      doctor_id: 2,
      name: "Dr. Nusrat Jahan",
      specialization: "Neurologist",
    },
    {
      doctor_id: 3,
      name: "Dr. Farhan Islam",
      specialization: "Medicine Specialist",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      patient_id: 1,
      doctor_id: formData.doctor_id,
      receptionist_id: null,
      scheduled_at: formData.scheduled_at,
      status: "Pending",
      notes: formData.notes,
    };

    console.log("Appointment Data:", appointmentData);
    alert("Appointment request submitted successfully!");

    setFormData({
      doctor_id: "",
      scheduled_at: "",
      notes: "",
    });
  };

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <PatientHero
          label="Appointment Request"
          title="Book Appointment"
          description="Choose a doctor, select your preferred date and time, and submit your appointment request."
          icon="☎️"
        />

        <section className="patient-container">
          <div className="patient-form-card">
            <form onSubmit={handleSubmit}>
              <div className="patient-form-group">
                <label>Select Doctor</label>
                <select
                  name="doctor_id"
                  value={formData.doctor_id}
                  onChange={handleChange}
                  required
                  className="patient-input"
                >
                  <option value="">Choose doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.doctor_id} value={doctor.doctor_id}>
                      {doctor.name} - {doctor.specialization}
                    </option>
                  ))}
                </select>
              </div>

              <div className="patient-form-group">
                <label>Appointment Date & Time</label>
                <input
                  type="datetime-local"
                  name="scheduled_at"
                  value={formData.scheduled_at}
                  onChange={handleChange}
                  required
                  className="patient-input"
                />
              </div>

              <div className="patient-form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Write your symptoms or reason for appointment"
                  rows="5"
                  className="patient-input"
                ></textarea>
              </div>

              <button type="submit" className="patient-btn">
                Confirm Appointment
              </button>
            </form>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default BookAppointment;