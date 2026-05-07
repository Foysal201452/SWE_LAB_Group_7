export const rolePermissions = {
  admin: {
    roleName: "Admin",
    accessLevel: "Superuser",
    permissions: {
      dashboard: ["read"],
      users: ["create", "read", "update", "delete"],
      patients: ["create", "read", "update", "delete"],
      doctors: ["create", "read", "update", "delete"],
      appointments: ["create", "read", "update", "delete"],
      billing: ["create", "read", "update", "delete"],
      reports: ["read", "export"],
      settings: ["create", "read", "update", "delete"],
      departments: ["create", "read", "update", "delete"],
    },
    sidebar: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Manage Users", path: "/admin/users" },
      { label: "System Settings", path: "/admin/settings" },
      { label: "Reports", path: "/admin/reports" },
    ],
  },

  receptionist: {
    roleName: "Receptionist",
    accessLevel: "Operational",
    permissions: {
      dashboard: ["read"],
      patients: ["create", "read", "update"],
      medicalHistory: ["read", "update"],
      appointments: ["create", "read", "update"],
      doctorAvailability: ["read"],
      doctorDirectory: ["read"],
      billing: ["create", "read", "update"],
      reports: [],
      settings: [],
      users: [],
    },
    sidebar: [
      { label: "Dashboard", path: "/receptionist/dashboard" },
      { label: "Appointments", path: "/receptionist/appointments" },
      { label: "Register Patient", path: "/receptionist/register-patient" },
      { label: "Doctor Availability", path: "/receptionist/doctor-availability" },
      { label: "Billing", path: "/receptionist/billing" },
    ],
  },

  doctor: {
    roleName: "Doctor",
    accessLevel: "Medical",
    sidebar: [
      { label: "Dashboard", path: "/doctor/dashboard" },
      { label: "Appointments", path: "/doctor/appointments" },
      { label: "Patient History", path: "/doctor/patient-history" },
      { label: "Add Health Record", path: "/doctor/add-health-record" },
      { label: "Add Prescription", path: "/doctor/add-prescription" },
      { label: "Add Suggestion", path: "/doctor/add-suggestion" },
    ],
  },

  patient: {
    roleName: "Patient",
    accessLevel: "Self Service",
    sidebar: [
      { label: "Dashboard", path: "/patient/dashboard" },
      { label: "Book Appointment", path: "/patient/book-appointment" },
      { label: "My Appointments", path: "/patient/appointments" },
      { label: "Medical History", path: "/patient/medical-history" },
      { label: "Health Records", path: "/patient/health-records" },
      { label: "Prescriptions", path: "/patient/prescriptions" },
      { label: "Doctor Suggestions", path: "/patient/suggestions" },
    ],
  },
};

export const hasPermission = (role, module, action) => {
  const roleData = rolePermissions[role];

  if (!roleData || !roleData.permissions) return false;

  return roleData.permissions[module]?.includes(action);
};