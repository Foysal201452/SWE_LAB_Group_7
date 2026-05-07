import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function MyPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const savedPrescriptions =
      JSON.parse(localStorage.getItem("doctor_prescriptions")) || [];

    const fixedSavedPrescriptions = savedPrescriptions.map((prescription) => ({
      ...prescription,
      patient_name: "Mehedi Hasan Foysal",
      doctor_name: "Dr. Farhan Ishraq Jami",
    }));

    const defaultPrescriptions = [
      {
        prescription_id: 1,
        patient_id: "1",
        patient_name: "Mehedi Hasan Foysal",
        doctor_name: "Dr. Farhan Ishraq Jami",
        specialization: "Medicine Specialist",
        diagnosis: "Mild chest infection",
        advice: "Take medicine properly, drink warm water, and take enough rest.",
        issued_date: "2026-04-10",
        medicines: [
          {
            medicineName: "Azithromycin",
            dosage: "500mg once daily",
            duration: "3 Days",
            instructions: "Take after food",
          },
        ],
      },
      {
        prescription_id: 2,
        patient_id: "1",
        patient_name: "Mehedi Hasan Foysal",
        doctor_name: "Dr. Farhan Ishraq Jami",
        specialization: "Medicine Specialist",
        diagnosis: "Seasonal allergy",
        advice: "Avoid dust, wear a mask outside, and continue medication.",
        issued_date: "2026-04-20",
        medicines: [
          {
            medicineName: "Cetirizine",
            dosage: "10mg at night",
            duration: "5 Days",
            instructions: "Take before sleeping",
          },
        ],
      },
    ];

    const allPrescriptions = [
      ...fixedSavedPrescriptions,
      ...defaultPrescriptions,
    ];

    const patientPrescriptions = allPrescriptions.filter(
      (prescription) => String(prescription.patient_id) === "1"
    );

    setPrescriptions(patientPrescriptions);
  }, []);

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <section className="patient-hero">
          <div className="patient-hero-text">
            <small>Doctor Prescription</small>
            <h1>Prescriptions</h1>
            <p>
              View medicine, dosage, instructions, diagnosis, advice, and issue
              date from doctors.
            </p>
          </div>

          <div className="patient-hero-art">
            <span className="hero-star hero-star-left">✦</span>
            <span className="hero-star hero-star-right">✦</span>
            <span className="hero-main-icon">💊</span>
          </div>
        </section>

        <section className="patient-container">
          <div className="patient-prescription-list">
            {prescriptions.length > 0 ? (
              prescriptions.map((prescription) => (
                <div
                  className="patient-prescription-card"
                  key={prescription.prescription_id}
                >
                  <div className="prescription-card-header">
                    <div>
                      <p className="patient-section-label">
                        Prescription #{prescription.prescription_id}
                      </p>
                      <h2>{prescription.diagnosis}</h2>
                    </div>

                    <div className="prescription-date">
                      {prescription.issued_date}
                    </div>
                  </div>

                  <div className="prescription-patient-row">
                    <div>
                      <span>Patient</span>
                      <strong>{prescription.patient_name}</strong>
                    </div>

                    <div>
                      <span>Doctor</span>
                      <strong>{prescription.doctor_name}</strong>
                    </div>

                    <div>
                      <span>Specialization</span>
                      <strong>{prescription.specialization}</strong>
                    </div>
                  </div>

                  <div className="patient-table-card">
                    <table className="patient-table">
                      <thead>
                        <tr>
                          <th>Medicine</th>
                          <th>Dosage</th>
                          <th>Duration</th>
                          <th>Instructions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {(prescription.medicines || []).map(
                          (medicine, index) => (
                            <tr key={index}>
                              <td>{medicine.medicineName}</td>
                              <td>{medicine.dosage}</td>
                              <td>{medicine.duration}</td>
                              <td>{medicine.instructions}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="prescription-advice-box">
                    <span>Doctor Advice</span>
                    <p>{prescription.advice}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="patient-prescription-card">
                <h2>No Prescriptions Found</h2>
                <p>No doctor prescription has been added for this patient yet.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default MyPrescriptions;