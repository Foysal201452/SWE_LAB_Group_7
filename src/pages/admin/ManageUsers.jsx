import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Jami Hasan", role: "Patient", email: "jami@healthiva.com", status: "Active" },
    { id: 2, name: "Dr. Ahmed Rahman", role: "Doctor", email: "ahmed@healthiva.com", status: "Active" },
    { id: 3, name: "Nusrat Jahan", role: "Receptionist", email: "nusrat@healthiva.com", status: "Active" },
    { id: 4, name: "Admin User", role: "Administrator", email: "admin@healthiva.com", status: "Active" },
  ]);

  const toggleStatus = (id) => {
    const updated = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Disabled" : "Active" }
        : user
    );

    setUsers(updated);
  };

  return (
    <DashboardLayout role="admin">
      <div className="admin-page">
        <section className="admin-hero">
          <div>
            <p className="admin-label">Admin &gt; User Management</p>
            <h1>Manage Users</h1>
            <p>
              Admin can manage patient, doctor, receptionist, and administrator
              accounts with full access privileges.
            </p>
          </div>

          <div className="admin-hero-card">
            <h3>Role-Based Access</h3>
            <p>Patient, Doctor, Receptionist, Admin.</p>
          </div>
        </section>

        <section className="admin-content">
          <div className="admin-table-card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Admin Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={
                          user.status === "Active"
                            ? "admin-status active"
                            : "admin-status disabled"
                        }
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="admin-table-btn"
                        onClick={() => toggleStatus(user.id)}
                      >
                        {user.status === "Active" ? "Disable" : "Enable"}
                      </button>
                    </td>
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

export default ManageUsers;