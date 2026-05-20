# Hospital Management System — Group Contribution & Tools Report

**Course project:** Web-based Hospital Management System (Healthiva)  
**Project type:** Role-based multi-user hospital frontend application  
**Technology stack:** React 19, Vite 8, React Router DOM 7, JavaScript (ES modules)  
**Submission date:** May 2026  

---

## 1. Project Overview

Our group developed **Healthiva**, a hospital management system that simulates real hospital operations through four separate user portals: **Patient**, **Doctor**, **Receptionist**, and **Administrator**. The application allows each role to perform tasks relevant to their job—patients book and track appointments; doctors manage consultations and medical records; receptionists handle registration, scheduling, and billing; administrators oversee users, settings, and reports.

The system is implemented as a **single-page application (SPA)** using React. Navigation is handled with **React Router**, and each role has its own dashboard, sidebar menu, and set of pages. For the coursework demo, authentication uses **localStorage** (browser storage) with predefined demo accounts and optional patient self-registration, so the full UI can be demonstrated without a live backend server. The project is structured so it can later connect to a REST API using **Axios**.

**Project objectives achieved:**
- Separate interfaces for four hospital roles  
- Consistent UI/UX with shared layout and branding  
- Forms and tables for hospital workflows (appointments, records, billing, users)  
- Role-based navigation and permission definitions  
- Runnable demo via `npm run dev` (Vite development server)  

---

## 2. Group Members & Module Assignment

| Name | Student ID | Assigned module | Demo login ID |
|------|------------|-----------------|---------------|
| Tahia Zaima | 23524202133 | Login & Patient | Tahia |
| Junaeid Shanto | 23524202049 | Receptionist | Shanto |
| Farhan Ishraq Jami | 23524202103 | Doctor | Jami |
| Mehedi Hasan Foysal | 23524202119 | Admin | Foysal |

*Default demo password for all roles: `12345678`*

---

## 3. Detailed Individual Contributions

### 3.1 Tahia Zaima — Login & Patient Module

**Login system (`Login.jsx`)**  
Tahia designed the main entry page of the application. The login screen provides four role buttons (Patient, Doctor, Receptionist, Admin). After selecting a role, the user enters ID and password. The login logic validates credentials against demo accounts and, for patients, also checks **newly registered accounts** stored in `localStorage` under `created_patient_accounts`. On success, the app saves the role and user ID in `localStorage` and redirects to the correct dashboard route.

A major feature is **Patient Create Account**: a multi-field registration form (name, date of birth, gender, phone, email, address, password). New patients are saved locally with a timestamp, duplicate names are prevented, and the user is guided to log in with the new credentials. This demonstrates self-service patient onboarding.

**Patient module (7 pages)**  
| Page | Route | Main functionality |
|------|-------|-------------------|
| Patient Dashboard | `/patient/dashboard` | Service overview, quick links to all patient features |
| Book Appointment | `/patient/book-appointment` | Select doctor, date/time, notes; submit appointment request |
| My Appointments | `/patient/appointments` | View list with status badges (Pending / Confirmed / Cancelled) |
| Medical History | `/patient/medical-history` | View past conditions and diagnoses |
| Health Records | `/patient/health-records` | Access vitals and clinical record summaries |
| Prescriptions | `/patient/prescriptions` | View prescribed medicines and doctor advice |
| Doctor Suggestions | `/patient/suggestions` | Read follow-up suggestions from doctors |

Tahia also created reusable UI components such as **`PatientHero`** (page header with icon and description) and contributed **`patientStyle.css`** for a distinct, friendly patient-facing design (hero sections, tables, status badges). Patient pages use the shared `DashboardLayout` with role `"patient"`.

---

### 3.2 Junaeid Shanto — Receptionist Module

Shanto built the **Front Desk / Receptionist** portal for daily hospital operations. All pages use the `frontdesk-*` CSS theme for a consistent receptionist look.

**Receptionist module (5 pages)**  
| Page | Route | Main functionality |
|------|-------|-------------------|
| Receptionist Dashboard | `/receptionist/dashboard` | Stats: today’s appointments, new patients, pending bills; module shortcuts |
| Manage Appointments | `/receptionist/appointments` | Table of appointments; **Confirm**, **Cancel**, or keep **Pending**; saves to `localStorage` |
| Register Patient | `/receptionist/register-patient` | Hospital intake form; stores patients in `registered_patients` |
| Doctor Availability | `/receptionist/doctor-availability` | View which doctors are available and their schedules |
| Billing | `/receptionist/billing` | Service charges table; mark bills as **Paid**; persists in `billing_records` |

Shanto implemented **interactive state management** with React `useState` so receptionists can update appointment status and payment status in real time during the demo. Status values use color-coded CSS classes (`confirmed`, `cancelled`, `pending`) for quick visual identification. The register-patient form captures demographic and contact data required for hospital records, separate from the patient self-registration on the login page (receptionist-led vs patient-led registration).

Shanto integrated all receptionist routes in the main router and ensured sidebar items match **`rolePermissions.receptionist`** in the permissions file.

---

### 3.3 Mehedi Hasan Foysal — Admin Module

Foysal developed the **Administrator (superuser)** module and several **shared infrastructure** pieces used by the whole team.

**Admin module (4 pages)**  
| Page | Route | Main functionality |
|------|-------|-------------------|
| Admin Dashboard | `/admin/dashboard` | System stats: total users, doctors, receptionists, uptime; links to admin tools |
| Manage Users | `/admin/users` | User table (Patient, Doctor, Receptionist, Admin); toggle **Active / Disabled** |
| System Settings | `/admin/settings` | Toggles: 2FA, daily backup, encryption, maintenance mode |
| Reports | `/admin/reports` | Summary cards: appointments, patient records, billing collection, system status |

**Shared components (team-wide)**  
- **`DashboardLayout.jsx`**: Sidebar with Healthiva logo, role title, dynamic menu from permissions, active link highlighting (`NavLink`), and logout that clears all role keys from `localStorage`.  
- **`permissions.js`**: Defines `rolePermissions` for Admin and Receptionist (CRUD-style permission lists), sidebar menus for all four roles, and helper `hasPermission(role, module, action)` for future access control.  
- **`App.jsx`**: Central route map connecting every team member’s pages (25+ routes total).

Foysal’s work ensures all roles share one navigation pattern while Admin retains the highest access level (`Superuser`) in the permission model.

---

### 3.4 Farhan Ishraq Jami — Doctor Module

Jami implemented the **Doctor (medical staff)** portal for clinical workflows.

**Doctor module (6 pages)**  
| Page | Route | Main functionality |
|------|-------|-------------------|
| Doctor Dashboard | `/doctor/dashboard` | Daily statistics, today’s patient queue, quick actions |
| Doctor Appointments | `/doctor/appointments` | List of scheduled patients and appointment details |
| Patient History | `/doctor/patient-history` | Search by patient ID; display chronic conditions, diagnosis dates, status |
| Add Health Record | `/doctor/add-health-record` | Form to document vitals, symptoms, and clinical notes |
| Add Prescription | `/doctor/add-prescription` | Full prescription UI: patient info, diagnosis, advice, **dynamic medicine rows** (add/remove medicines, dosage, duration, instructions) |
| Add Suggestion | `/doctor/add-suggestion` | Post-treatment suggestions and follow-up guidance for patients |

The **Add Prescription** page is one of the most detailed screens in the project: it includes patient demographics, vital signs, multi-medicine entry with editable rows, and doctor profile display (Dr. Farhan Ishraq Jami, Medicine Specialist). Jami used controlled form state and array updates for medicine lists, demonstrating advanced React form handling.

Doctor demo login uses ID **Jami**, linking the module to the team member for presentation.

---

## 4. Team Collaboration & Development Process

**Division of work**  
Each member owned one role module end-to-end (UI, logic, and testing). Shared files (`App.jsx`, `DashboardLayout`, `permissions.js`, global CSS) were coordinated so routes and menus stayed consistent.

**Integration steps**  
1. Agree on folder structure: `src/pages/{patient,doctor,receptionist,admin}/`  
2. Use common layout component for all dashboards  
3. Register all routes in `App.jsx`  
4. Align demo login IDs with team names  
5. Cross-test: log in as each role and verify sidebar + page navigation  

**Challenges faced**  
- Keeping **consistent styling** across four different panel themes (patient, frontdesk, admin, doctor)  
- Managing **localStorage** keys for multiple roles without session conflicts  
- Ensuring **logout** clears all stored role data  
- Planning for **future API** integration (forms currently log to console or use sample data)  

**How challenges were solved**  
- Shared layout and permission-driven menus reduced duplication  
- Standardized `localStorage` key names (`role`, `patient_id`, `doctor_id`, etc.)  
- Central logout function in `DashboardLayout`  
- Axios added to dependencies for upcoming backend connection  

---

## 5. Testing & Demonstration

| Test case | Expected result |
|-----------|-----------------|
| Patient login (Tahia / 12345678) | Redirect to patient dashboard |
| Create new patient account | Saved in localStorage; login works |
| Receptionist confirms appointment | Status changes to Confirmed |
| Receptionist marks bill paid | Status updates to Paid |
| Admin disables user | Status toggles Active ↔ Disabled |
| Doctor searches patient history | Matching records displayed |
| Logout from any role | Returns to login; storage cleared |

Demo was run using **`npm run dev`** and tested in Chrome/Edge with DevTools for responsive layout checks.

---

## 6. Tools & Technologies Used

### 6.1 Core development tools

| Category | Tool | Purpose in project |
|----------|------|-------------------|
| Runtime | Node.js | Run npm scripts and Vite |
| Build | Vite 8 | Fast HMR dev server, production build |
| Framework | React 19 | Component-based UI |
| Routing | React Router DOM 7 | SPA routes per role |
| Forms | React Hook Form | Form validation (where applied) |
| HTTP (planned) | Axios 1.15 | Future REST API calls to backend |
| Linting | ESLint 10 | Code quality and React hooks rules |
| Styling | Custom CSS | `index.css`, role-specific classes |
| Package manager | npm | Install dependencies, run scripts |

### 6.2 IDE, design & collaboration

- **Visual Studio Code / Cursor IDE** — primary code editor, integrated terminal, file search  
- **Browser DevTools** — inspect elements, test localStorage, debug console output  
- **Figma (if used)** — optional UI reference for layout and colors  
- **WhatsApp / Google Meet** — team meetings and task updates  
- **Microsoft Word / Google Docs** — report and documentation  

### 6.3 AI & assistive tools (declaration)

| Tool | How it was used | Team responsibility |
|------|-----------------|---------------------|
| **Cursor AI (Composer / Agent)** | Generating React component boilerplate, fixing routing errors, suggesting CSS layout, drafting report sections | All code reviewed and modified by assigned member |
| **ChatGPT / similar (optional)** | Explaining React hooks, `useState` patterns, localStorage usage | Used for learning only; not copied blindly |
| **GitHub Copilot (optional)** | Autocomplete for repetitive JSX | Verified before commit |

**Important declaration:** AI tools were used as **coding assistants**, not as replacement for group work. Each member designed their module, tested their screens, and understands the code they submitted. AI-generated suggestions were edited to match project requirements and naming conventions.

---

## 7. Future Improvements

- Connect frontend to **Java/Spring, Node, or PHP backend** with real database  
- Replace demo login with **JWT or session-based authentication**  
- Sync appointment and billing data between Patient, Receptionist, and Doctor modules via API  
- Add **input validation** and error messages on all forms  
- Deploy using **Vite build** (`npm run build`) to Netlify or similar hosting  

---

## 8. Conclusion

Our group successfully delivered a **four-role hospital management frontend** with clear ownership: Zaima (Login/Patient), Shanto (Receptionist), Foysal (Admin + shared layout/permissions), and Jami (Doctor). The project demonstrates understanding of React components, routing, state management, role-based UI design, and modern frontend tooling. Tools including Vite, React Router, Cursor AI, and browser-based testing supported rapid development while keeping each member accountable for their module.

We are prepared to present the live demo, explain our individual contributions, and extend the system with a backend in a future phase.

---

**Prepared by:**  
Tahia Zaima (23524202133) · Junaeid Shanto (23524202049) · Mehedi Hasan Foysal (23524202119) · Farhan Ishraq Jami (23524202103)

*Hospital Management System — Group Project Report*
