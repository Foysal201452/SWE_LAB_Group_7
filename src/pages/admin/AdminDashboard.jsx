import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "124" },
    { title: "Doctors", value: "18" },
    { title: "Receptionists", value: "08" },
    { title: "System Uptime", value: "99%" },
  ];

  const modules = [
    {
      title: "Manage Users",
      text: "Create, update, disable, or monitor system user accounts.",
      path: "/admin/users",
      active: true,
      emoji: "👥",
    },
    {
      title: "System Settings",
      text: "Control sensitive settings, backup, security, and access.",
      path: "/admin/settings",
      active: false,
      emoji: "⚙️",
    },
    {
      title: "Reports",
      text: "View appointment, billing, user, and system reports.",
      path: "/admin/reports",
      active: false,
      emoji: "📊",
    },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="admin-page">
        <section className="admin-hero">
          <div>
            <p className="admin-label">Administrator Panel</p>
            <h1>Admin Dashboard</h1>
            <p>
              Comprehensive access for user management, system monitoring,
              sensitive settings, backups, reports, and role-based control.
            </p>
          </div>

          <div className="admin-image-box">
            <div className="admin-image-card">
              <img src="/images/admin.jpg" alt="Admin control illustration" />
            </div>

            <span className="admin-image-star star-one">✦</span>
            <span className="admin-image-star star-two">✦</span>
          </div>
        </section>

        <section className="admin-content">
          <div className="admin-stats-grid">
            {stats.map((item) => (
              <div className="admin-stat-card" key={item.title}>
                <span>{item.title}</span>
                <h2>{item.value}</h2>
              </div>
            ))}
          </div>

          <div className="admin-module-grid">
            {modules.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className={
                  item.active ? "admin-module-card active" : "admin-module-card"
                }
              >
                <div className="admin-emoji-icon">
                  <span>{item.emoji}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className="admin-open-text">Open Module</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;