import DashboardLayout from "../../layouts/DashboardLayout";
import PatientHero from "../../components/PatientHero";

function MyHealthRecords() {
  const records = [
    {
      record_id: 1,
      doctor_name: "Dr. Farhan Ishraq Jami",
      record_date: "2026-04-10",
      diagnosis: "Mild chest infection",
      symptoms: "Cough, chest pain, fever",
      treatment: "Antibiotics and rest",
    },
    {
      record_id: 2,
      doctor_name: "Dr. Ahmed Islam",
      record_date: "2026-04-20",
      diagnosis: "Seasonal allergy",
      symptoms: "Sneezing, runny nose",
      treatment: "Antihistamine medication",
    },
  ];

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <PatientHero
          label="Digital Health Record"
          title="Health Records"
          description="See diagnoses, symptoms, and treatments added by doctors."
          icon="📝"
        />

        <section className="patient-container">
          <div className="patient-table-card">
            <table className="patient-table">
              <thead>
                <tr>
                  <th>Record ID</th>
                  <th>Doctor</th>
                  <th>Record Date</th>
                  <th>Diagnosis</th>
                  <th>Symptoms</th>
                  <th>Treatment</th>
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <tr key={record.record_id}>
                    <td>{record.record_id}</td>
                    <td>{record.doctor_name}</td>
                    <td>{record.record_date}</td>
                    <td>{record.diagnosis}</td>
                    <td>{record.symptoms}</td>
                    <td>{record.treatment}</td>
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

export default MyHealthRecords;