import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function AddSuggestion() {
  const [formData, setFormData] = useState({
    patient_id: "",
    record_id: "",
    suggestion: "",
  });

  const dummySuggestions = [
    {
      suggestion_id: 1,
      patient_name: "Jami Hasan",
      record_id: 1001,
      suggestion:
        "Drink warm water, take proper rest, avoid cold drinks, and continue medicine for 5 days.",
      created_at: "2026-05-04",
    },
    {
      suggestion_id: 2,
      patient_name: "Nusrat Jahan",
      record_id: 1002,
      suggestion:
        "Avoid bright light, maintain sleep schedule, and return for follow-up after one week.",
      created_at: "2026-05-04",
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

    const suggestionData = {
      suggestion_id: Math.floor(1000 + Math.random() * 9000),
      doctor_id: "Ahmed",
      patient_id: formData.patient_id,
      record_id: formData.record_id,
      suggestion: formData.suggestion,
      created_at: new Date().toLocaleString(),
    };

    console.log("Doctor Suggestion Data:", suggestionData);
    alert("Doctor suggestion added successfully!");

    setFormData({
      patient_id: "",
      record_id: "",
      suggestion: "",
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-prescription-page">
        <section className="doctor-prescription-hero">
          <div>
            <p className="doctor-breadcrumb">Doctor &gt; Suggestion</p>
            <h1>Add Doctor Suggestion</h1>
            <p>
              Add follow-up advice and medical guidance connected with patient
              records.
            </p>
          </div>

          <div className="prescription-hero-card">
            <h3>Doctor Suggestion</h3>
            <p>Patient advice, follow-up note, and medical guidance</p>
          </div>
        </section>

        <section className="prescription-layout">
          <form className="prescription-form-card" onSubmit={handleSubmit}>
            <div className="prescription-section-title">
              <h2>Suggestion Form</h2>
              <p>Connect the suggestion with patient ID and health record ID.</p>
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
                <label>Record ID</label>
                <input
                  type="text"
                  name="record_id"
                  value={formData.record_id}
                  onChange={handleChange}
                  placeholder="Example: 1001"
                  required
                />
              </div>
            </div>

            <div className="prescription-group">
              <label>Suggestion</label>
              <textarea
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="Write doctor's advice or follow-up suggestion"
                rows="7"
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
              Save Suggestion
            </button>
          </form>

          <aside className="prescription-preview-card">
            <p className="doctor-small-label">Recent Suggestions</p>
            <h2>Doctor Advice History</h2>
            <p>
              These dummy records show how doctor suggestions connect with
              patient records.
            </p>

            <div className="preview-info-list">
              {dummySuggestions.map((item) => (
                <div key={item.suggestion_id}>
                  <span>{item.patient_name} | Record ID: {item.record_id}</span>
                  <strong>{item.suggestion}</strong>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default AddSuggestion;