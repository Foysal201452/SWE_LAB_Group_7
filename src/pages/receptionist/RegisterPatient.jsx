import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function RegisterPatient() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      patient_id: Date.now(),
      ...formData,
      created_at: new Date().toLocaleString(),
    };

    const oldPatients = JSON.parse(localStorage.getItem("registered_patients")) || [];
    localStorage.setItem(
      "registered_patients",
      JSON.stringify([newPatient, ...oldPatients])
    );

    alert("Patient registered successfully!");
    console.log("Registered Patient:", newPatient);

    setFormData({
      name: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <DashboardLayout role="receptionist">
      <div className="frontdesk-page">
        <section className="frontdesk-hero">
          <div>
            <p className="frontdesk-label">Receptionist &gt; Patient Intake</p>
            <h1>Register Patient</h1>
            <p>
              Create a new patient record with basic personal and contact
              information.
            </p>
          </div>

          <div className="frontdesk-hero-card">
            <h3>Patient Intake</h3>
            <p>Connected to patient table structure.</p>
          </div>
        </section>

        <section className="frontdesk-form-section">
          <form className="frontdesk-form-card" onSubmit={handleSubmit}>
            <h2>Patient Information</h2>

            <div className="frontdesk-form-grid">
              <div className="frontdesk-group">
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="frontdesk-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>

              <div className="frontdesk-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="frontdesk-group">
                <label>Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="frontdesk-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="frontdesk-group">
              <label>Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows="4" required />
            </div>

            <button className="frontdesk-primary-btn" type="submit">
              Register Patient
            </button>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default RegisterPatient;