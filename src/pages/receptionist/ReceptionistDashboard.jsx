import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function ReceptionistDashboard() {
  const stats = [
    { title: "Today Appointments", value: "18", note: "Scheduled visits" },
    { title: "New Patients", value: "06", note: "Registered today" },
    { title: "Pending Bills", value: "04", note: "Need processing" },
  ];

  const modules = [
    {
      title: "Manage Appointments",
      text: "Modify, confirm, or cancel patient appointments.",
      path: "/receptionist/appointments",
      active: true,
      emoji: "📋",
    },
    {
      title: "Register Patient",
      text: "Create new patient records for hospital intake.",
      path: "/receptionist/register-patient",
      active: false,
      emoji: "✍🏻",
    },
    {
      title: "Doctor Availability",
      text: "Check available doctors and time slots.",
      path: "/receptionist/doctor-availability",
      active: false,
      emoji: "🥼",
    },
    {
      title: "Costing / Billing",
      text: "Process service cost, consultation fees, and payment status.",
      path: "/receptionist/billing",
      active: false,
      emoji: "💳",
    },
  ];

  return (
    <DashboardLayout role="receptionist">
      <div className="frontdesk-page">
        <section className="frontdesk-hero">
          <div>
            <p className="frontdesk-label">Front Desk Panel</p>
            <h1>Receptionist Dashboard</h1>
            <p>
              Manage patient intake, appointment coordination, doctor
              availability, and hospital service billing from one place.
            </p>
          </div>

          <div className="frontdesk-image-box">
            <div className="frontdesk-image-card">
              <img src="/images/receptionist.jpg" alt="Receptionist desk" />
            </div>

            <span className="frontdesk-image-star star-one">✦</span>
            <span className="frontdesk-image-star star-two">✦</span>
          </div>
        </section>

        <section className="frontdesk-content">
          <div className="frontdesk-stats-grid">
            {stats.map((item) => (
              <div className="frontdesk-stat-card" key={item.title}>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="frontdesk-module-grid">
            {modules.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={
                  item.active
                    ? "frontdesk-module-card active"
                    : "frontdesk-module-card"
                }
              >
                <div className="frontdesk-emoji-icon">
                  <span>{item.emoji}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className="frontdesk-open-text">Open Module</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default ReceptionistDashboard;