import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function PatientHistory() {
  const [patientId, setPatientId] = useState("");
  const [searched, setSearched] = useState(false);

  const histories = [
    {
      history_id: 1,
      patient_id: "1",
      patient_name: "Jami Hasan",
      age: 24,
      gender: "Male",
      condition: "Asthma",
      diagnosed_on: "2023-04-12",
      status: "Ongoing",
    },
    {
      history_id: 2,
      patient_id: "1",
      patient_name: "Jami Hasan",
      age: 24,
      gender: "Male",
      condition: "High Blood Pressure",
      diagnosed_on: "2024-01-20",
      status: "Controlled",
    },
    {
      history_id: 3,
      patient_id: "2",
      patient_name: "Nusrat Jahan",
      age: 31,
      gender: "Female",
      condition: "Migraine",
      diagnosed_on: "2025-03-08",
      status: "Under Observation",
    },
    {
      history_id: 4,
      patient_id: "3",
      patient_name: "Farhan Ahmed",
      age: 42,
      gender: "Male",
      condition: "Diabetes Type 2",
      diagnosed_on: "2022-09-14",
      status: "Controlled",
    },
  ];

  const filteredHistories = histories.filter(
    (history) => history.patient_id === patientId
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-prescription-page">
        <section className="doctor-prescription-hero">
          <div>
            <p className="doctor-breadcrumb">Doctor &gt; Patient History</p>
            <h1>Patient History</h1>
            <p>
              Search patient medical history by patient ID and review previous
              conditions before consultation.
            </p>
          </div>

          <div className="prescription-hero-card">
            <h3>Patient Data Query</h3>
            <p>Search and review patient medical history</p>
          </div>
        </section>

        <section className="doctor-dashboard-overview">
          <div className="doctor-queue-card">
            <div className="doctor-table-header">
              <div>
                <p className="doctor-small-label">Search Patient</p>
                <h2>Find Medical History</h2>
              </div>
            </div>

            <form onSubmit={handleSearch} className="prescription-form-card">
              <div className="prescription-group">
                <label>Patient ID</label>
                <input
                  type="text"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  placeholder="Example: 1"
                  required
                />
              </div>

              <button type="submit" className="doctor-print-btn">
                Search History
              </button>
            </form>
          </div>

          {searched && (
            <div className="doctor-queue-card" style={{ marginTop: "30px" }}>
              <div className="doctor-table-header">
                <div>
                  <p className="doctor-small-label">Search Result</p>
                  <h2>Medical History Records</h2>
                </div>
              </div>

              <div className="doctor-table-wrapper">
                <table className="doctor-queue-table">
                  <thead>
                    <tr>
                      <th>History ID</th>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Condition</th>
                      <th>Diagnosed On</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredHistories.length > 0 ? (
                      filteredHistories.map((history) => (
                        <tr key={history.history_id}>
                          <td>{history.history_id}</td>
                          <td>{history.patient_name}</td>
                          <td>{history.age}</td>
                          <td>{history.gender}</td>
                          <td>{history.condition}</td>
                          <td>{history.diagnosed_on}</td>
                          <td>{history.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">
                          No medical history found for this patient ID.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

export default PatientHistory;