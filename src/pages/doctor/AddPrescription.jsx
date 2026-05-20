import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function AddPrescription() {
  const [formData, setFormData] = useState({
    patientId: "1",
    patientName: "Mehedi Hasan Foysal",
    age: "24",
    gender: "Male",
    weight: "68 kg",
    bloodPressure: "120/80 mmHg",
    temperature: "102°F",
    diagnosis:
      "Seasonal Flu and High Fever. Patient has fever, cough, sore throat, body ache, weakness, and headache for the last two days.",
    advice:
      "Drink plenty of fluids, take complete rest for 3 days, avoid cold drinks, and return for follow-up if fever continues after 72 hours.",
  });

  const [medicines, setMedicines] = useState([
    {
      medicineName: "Paracetamol 500mg",
      dosage: "1+1+1",
      duration: "5 Days",
      instructions: "After Meal",
    },
    {
      medicineName: "Cetirizine 10mg",
      dosage: "0+0+1",
      duration: "5 Days",
      instructions: "Before Sleep",
    },
    {
      medicineName: "ORS Saline",
      dosage: "As needed",
      duration: "3 Days",
      instructions: "Mix with clean water",
    },
  ]);

  const doctor = {
    doctorId: "Jami",
    doctorName: "Dr. Farhan Ishraq Jami",
    specialization: "Medicine Specialist",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMedicineChange = (index, e) => {
    const updatedMedicines = [...medicines];

    updatedMedicines[index] = {
      ...updatedMedicines[index],
      [e.target.name]: e.target.value,
    };

    setMedicines(updatedMedicines);
  };

  const addMedicineRow = () => {
    setMedicines([
      ...medicines,
      {
        medicineName: "",
        dosage: "",
        duration: "",
        instructions: "",
      },
    ]);
  };

  const removeMedicineRow = (index) => {
    if (medicines.length === 1) {
      alert("At least one medicine row is required.");
      return;
    }

    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPrescription = {
      prescription_id: Date.now(),
      patient_id: formData.patientId,
      patient_name: formData.patientName,
      age: formData.age,
      gender: formData.gender,
      weight: formData.weight,
      blood_pressure: formData.bloodPressure,
      temperature: formData.temperature,
      diagnosis: formData.diagnosis,
      advice: formData.advice,
      medicines: medicines,
      doctor_id: doctor.doctorId,
      doctor_name: doctor.doctorName,
      specialization: doctor.specialization,
      issued_date: new Date().toLocaleDateString(),
    };

    const oldPrescriptions =
      JSON.parse(localStorage.getItem("doctor_prescriptions")) || [];

    const updatedPrescriptions = [newPrescription, ...oldPrescriptions];

    localStorage.setItem(
      "doctor_prescriptions",
      JSON.stringify(updatedPrescriptions)
    );

    alert("Prescription saved successfully! Patient can now see it.");

    console.log("Saved Prescription:", newPrescription);
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-prescription-page">
        <section className="doctor-prescription-hero">
          <div>
            <p className="doctor-breadcrumb">Doctor &gt; Prescription</p>
            <h1>Create Prescription</h1>
            <p>
              Generate digital prescriptions with patient details, diagnosis,
              medication plan, advice, and doctor signature.
            </p>
          </div>

          <div className="prescription-hero-card">
            <h3>Digital Prescription</h3>
            <p>Saved prescriptions will appear in the patient panel.</p>
          </div>
        </section>

        <section className="prescription-layout">
          <form className="prescription-form-card" onSubmit={handleSubmit}>
            <div className="prescription-section-title">
              <h2>Patient Details</h2>
              <p>Enter patient information and vitals.</p>
            </div>

            <div className="prescription-grid">
              <div className="prescription-group">
                <label>Patient ID</label>
                <input
                  type="text"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Weight</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Blood Pressure</label>
                <input
                  type="text"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="prescription-group">
                <label>Temperature</label>
                <input
                  type="text"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="prescription-group">
              <label>Diagnosis / Doctor Observations</label>
              <textarea
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <div className="prescription-section-title">
              <h2>Medication Table</h2>
              <p>Add medicine name, dosage, duration, and instructions.</p>
            </div>

            <div className="prescription-table-wrapper">
              <table className="prescription-table">
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Duration</th>
                    <th>Instructions</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {medicines.map((medicine, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="medicineName"
                          value={medicine.medicineName}
                          onChange={(e) => handleMedicineChange(index, e)}
                          placeholder="Paracetamol 500mg"
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="dosage"
                          value={medicine.dosage}
                          onChange={(e) => handleMedicineChange(index, e)}
                          placeholder="1+0+1"
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="duration"
                          value={medicine.duration}
                          onChange={(e) => handleMedicineChange(index, e)}
                          placeholder="5 Days"
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="instructions"
                          value={medicine.instructions}
                          onChange={(e) => handleMedicineChange(index, e)}
                          placeholder="After Meal"
                          required
                        />
                      </td>

                      <td>
                        <button
                          type="button"
                          className="medicine-remove-btn"
                          onClick={() => removeMedicineRow(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              className="medicine-add-btn"
              onClick={addMedicineRow}
            >
              + Add Medicine
            </button>

            <div className="prescription-group">
              <label>Advice</label>
              <textarea
                name="advice"
                value={formData.advice}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="doctor-signature-box">
              <div>
                <p>Digital Signature</p>
                <h3>{doctor.doctorName}</h3>
                <span>{doctor.specialization}</span>
                <span>Doctor ID: {doctor.doctorId}</span>
              </div>

              <div className="signature-line">
                <strong>Verified</strong>
              </div>
            </div>

            <button type="submit" className="doctor-print-btn">
              Save Prescription for Patient
            </button>
          </form>

          <aside className="prescription-preview-card">
            <p className="doctor-small-label">Completed Example</p>
            <h2>Seasonal Flu and High Fever</h2>
            <p>
              This prescription is editable. After clicking save, it will appear
              in the patient prescription page.
            </p>

            <div className="preview-info-list">
              <div>
                <span>Patient</span>
                <strong>{formData.patientName}</strong>
              </div>

              <div>
                <span>Doctor</span>
                <strong>{doctor.doctorName}</strong>
              </div>

              <div>
                <span>Vitals</span>
                <strong>
                  BP {formData.bloodPressure}, Temp {formData.temperature}
                </strong>
              </div>

              <div>
                <span>Main Medicine</span>
                <strong>
                  {medicines[0]?.medicineName} | {medicines[0]?.dosage} |{" "}
                  {medicines[0]?.duration}
                </strong>
              </div>

              <div>
                <span>Advice</span>
                <strong>{formData.advice}</strong>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default AddPrescription;