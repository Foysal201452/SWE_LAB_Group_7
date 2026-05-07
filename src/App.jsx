import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppointments";
import MyMedicalHistory from "./pages/patient/MyMedicalHistory";
import MyHealthRecords from "./pages/patient/MyHealthRecords";
import MyPrescriptions from "./pages/patient/MyPrescriptions";
import MySuggestions from "./pages/patient/MySuggestions";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import PatientHistory from "./pages/doctor/PatientHistory";
import AddHealthRecord from "./pages/doctor/AddHealthRecord";
import AddPrescription from "./pages/doctor/AddPrescription";
import AddSuggestion from "./pages/doctor/AddSuggestion";

import ReceptionistDashboard from "./pages/receptionist/ReceptionistDashboard";
import ManageAppointments from "./pages/receptionist/ManageAppointments";
import RegisterPatient from "./pages/receptionist/RegisterPatient";
import DoctorAvailability from "./pages/receptionist/DoctorAvailability";
import Billing from "./pages/receptionist/Billing";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import SystemSettings from "./pages/admin/SystemSettings";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Patient Routes */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/book-appointment" element={<BookAppointment />} />
        <Route path="/patient/appointments" element={<MyAppointments />} />
        <Route path="/patient/medical-history" element={<MyMedicalHistory />} />
        <Route path="/patient/health-records" element={<MyHealthRecords />} />
        <Route path="/patient/prescriptions" element={<MyPrescriptions />} />
        <Route path="/patient/suggestions" element={<MySuggestions />} />

        {/* Doctor Routes */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/patient-history" element={<PatientHistory />} />
        <Route path="/doctor/add-health-record" element={<AddHealthRecord />} />
        <Route path="/doctor/add-prescription" element={<AddPrescription />} />
        <Route path="/doctor/add-suggestion" element={<AddSuggestion />} />

        {/* Receptionist Routes */}
        <Route
          path="/receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />
        <Route
          path="/receptionist/appointments"
          element={<ManageAppointments />}
        />
        <Route
          path="/receptionist/register-patient"
          element={<RegisterPatient />}
        />
        <Route
          path="/receptionist/doctor-availability"
          element={<DoctorAvailability />}
        />
        <Route path="/receptionist/billing" element={<Billing />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/settings" element={<SystemSettings />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;