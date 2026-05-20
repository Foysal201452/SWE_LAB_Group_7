import DashboardLayout from "../../layouts/DashboardLayout";

function Reports() {
  const reports = [
    { title: "Appointments Report", value: "342", note: "Total monthly appointments" },
    { title: "Patient Records", value: "520", note: "Stored patient records" },
    { title: "Billing Collection", value: "৳ 85,400", note: "This month" },
    { title: "System Status", value: "Stable", note: "No major downtime" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="admin-page">
        <section className="admin-hero">
          <div>
            <p className="admin-label">Admin &gt; Reports</p>
            <h1>Reports & System Status</h1>
            <p>
              Generate summaries for appointments, billing, user activity,
              patient records, backup, and platform health.
            </p>
          </div>

          <div className="admin-hero-card">
            <h3>Monitoring</h3>
            <p>Reports and system status overview.</p>
          </div>
        </section>

        <section className="admin-content">
          <div className="admin-stats-grid">
            {reports.map((item) => (
              <div className="admin-stat-card" key={item.title}>
                <span>{item.title}</span>
                <h2>{item.value}</h2>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Reports;