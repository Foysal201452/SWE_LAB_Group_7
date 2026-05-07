import DashboardLayout from "../../layouts/DashboardLayout";
import PatientHero from "../../components/PatientHero";

function MyMedicalHistory() {
  const histories = [
    {
      history_id: 1,
      condition: "Asthma",
      diagnosed_on: "2023-04-12",
      status: "Ongoing",
    },
    {
      history_id: 2,
      condition: "High Blood Pressure",
      diagnosed_on: "2024-01-20",
      status: "Controlled",
    },
  ];

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <PatientHero
          label="Medical Records"
          title="Medical History"
          description="View your previous and current medical conditions."
          icon="🫀"
        />

        <section className="patient-container">
          <div className="patient-table-card">
            <table className="patient-table">
              <thead>
                <tr>
                  <th>History ID</th>
                  <th>Condition</th>
                  <th>Diagnosed On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {histories.map((history) => (
                  <tr key={history.history_id}>
                    <td>{history.history_id}</td>
                    <td>{history.condition}</td>
                    <td>{history.diagnosed_on}</td>
                    <td>{history.status}</td>
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

export default MyMedicalHistory;