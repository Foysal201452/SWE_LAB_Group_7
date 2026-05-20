import { NavLink, useNavigate } from "react-router-dom";
import { rolePermissions } from "../data/permissions";

function DashboardLayout({ children, role }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("patient_id");
    localStorage.removeItem("doctor_id");
    localStorage.removeItem("receptionist_id");
    localStorage.removeItem("admin_id");

    navigate("/");
  };

  const menuItems = rolePermissions?.[role]?.sidebar || [];

  const roleTitles = {
    patient: "Patient Panel",
    doctor: "Doctor Panel",
    receptionist: "Front Desk Panel",
    admin: "Administrator Panel",
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          health<span>iva.</span>
        </div>

        <p className="dashboard-role-title">
          {roleTitles[role] || "Dashboard"}
        </p>

        <div className="dashboard-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "dashboard-link active-link" : "dashboard-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button type="button" className="dashboard-logout" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-main">{children}</main>
    </div>
  );
}

export default DashboardLayout;