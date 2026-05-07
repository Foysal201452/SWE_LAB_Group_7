import DashboardLayout from "../../layouts/DashboardLayout";
import PatientHero from "../../components/PatientHero";

function MySuggestions() {
  const suggestions = [
    {
      suggestion_id: 1,
      doctor_name: "Dr. Ahmed Rahman",
      record_id: 1,
      suggestion: "Drink warm water, avoid cold drinks, and take enough rest.",
      created_at: "2026-04-10",
    },
    {
      suggestion_id: 2,
      doctor_name: "Dr. Farhan Islam",
      record_id: 2,
      suggestion: "Avoid dust, wear a mask outside, and continue medication.",
      created_at: "2026-04-20",
    },
  ];

  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <PatientHero
          label="Doctor Advice"
          title="Doctor Suggestions"
          description="Read medical suggestions and follow-up advice from doctors."
          icon="🩺"
        />

        <section className="patient-container">
          <div className="patient-grid">
            {suggestions.map((item) => (
              <div key={item.suggestion_id} className="patient-card">
                <div className="patient-card-icon">👨‍⚕️</div>
                <h3>{item.doctor_name}</h3>

                <p>
                  <strong>Record ID:</strong> {item.record_id}
                </p>

                <p>{item.suggestion}</p>

                <p>
                  <strong>Date:</strong> {item.created_at}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default MySuggestions;