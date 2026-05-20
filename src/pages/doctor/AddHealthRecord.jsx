import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function AddHealthRecord() {
  const [formData, setFormData] = useState({
    patient_id: "",
    record_date: "",
    diagnosis: "",
    symptoms: "",
    treatment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const healthRecordData = {
      record_id: Math.floor(1000 + Math.random() * 9000),
      patient_id: formData.patient_id,
      doctor_id: "Ahmed",
      record_date: formData.record_date,
      diagnosis: formData.diagnosis,
      symptoms: formData.symptoms,
      treatment: formData.treatment,
      created_at: new Date().toLocaleString(),
    };

    console.log("Health Record Data:", healthRecordData);
    alert("Health record added successfully!");

    setFormData({
      patient_id: "",
      record_date: "",
      diagnosis: "",
      symptoms: "",
      treatment: "",
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-prescription-page">
        <section className="doctor-prescription-hero">
          <div>
            <p className="doctor-breadcrumb">Doctor &gt; Health Record</p>
            <h1>Add Health Record</h1>
            <p>
              Add patient diagnosis, symptoms, and treatment details according
              to the hospital health record table.
            </p>
          </div>

          <div className="prescription-hero-card">
            <h3>Health Record</h3>
            <p>Diagnosis, symptoms, treatment, and record date</p>
          </div>
        </section>

        <section className="prescription-layout single-form-layout">
          <form className="prescription-form-card" onSubmit={handleSubmit}>
            <div className="prescription-section-title">
              <h2>Patient Treatment Record</h2>
              <p>Fill in the consultation result and treatment information.</p>
            </div>

            <div className="prescription-grid">
              <div className="prescription-group">
                <label>Patient ID</label>
                <input
                  type="text"
                  name="patient_id"
                  value={formData.patient_id}
                  onChange={handleChange}
                  placeholder="Example: 1"
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Record Date</label>
                <input
                  type="date"
                  name="record_date"
                  value={formData.record_date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="prescription-group">
              <label>Diagnosis</label>
              <textarea
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                placeholder="Example: Seasonal flu with high fever"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="prescription-group">
              <label>Symptoms</label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="Example: Fever, cough, sore throat, body ache"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="prescription-group">
              <label>Treatment</label>
              <textarea
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                placeholder="Example: Rest, fluids, fever medicine, follow-up if symptoms continue"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="doctor-signature-box">
              <div>
                <p>Doctor Credentials</p>
                <h3>Dr. Ahmed Rahman</h3>
                <span>Medicine Specialist</span>
                <span>Doctor ID: Ahmed</span>
              </div>

              <div className="signature-line">
                <strong>Verified</strong>
              </div>
            </div>

            <button type="submit" className="doctor-print-btn">
              Save Health Record
            </button>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default AddHealthRecord;