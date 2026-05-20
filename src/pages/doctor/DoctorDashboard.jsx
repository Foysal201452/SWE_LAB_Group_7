import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function DoctorDashboard() {
  const stats = [
    {
      title: "Patients Treated Today",
      value: "18",
      note: "Completed consultations",
    },
    {
      title: "Pending Appointments",
      value: "07",
      note: "Waiting in queue",
    },
    {
      title: "Emergency Cases",
      value: "03",
      note: "Need urgent attention",
    },
  ];

  const todayQueue = [
    {
      id: 1,
      name: "Mehedi Hasan Foysal",
      age: 24,
      appointmentTime: "09:30 AM",
      status: "Waiting",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      age: 31,
      appointmentTime: "10:00 AM",
      status: "In Consultation",
    },
    {
      id: 3,
      name: "Farhan Ahmed",
      age: 42,
      appointmentTime: "10:45 AM",
      status: "Completed",
    },
    {
      id: 4,
      name: "Sadia Islam",
      age: 28,
      appointmentTime: "11:30 AM",
      status: "Waiting",
    },
    {
      id: 5,
      name: "Jami Hasan",
      age: 36,
      appointmentTime: "12:15 PM",
      status: "Emergency",
    },
  ];

  const services = [
    {
      title: "Appointments",
      text: "View patient appointment requests and consultation schedule.",
      path: "/doctor/appointments",
      icon: "📋",
      active: true,
    },
    {
      title: "Patient History",
      text: "Search patient records and review medical history before treatment.",
      path: "/doctor/patient-history",
      icon: "📁",
      active: false,
    },
    {
      title: "Health Records",
      text: "Add diagnosis, symptoms, and treatment details for patients.",
      path: "/doctor/add-health-record",
      icon: "📝",
      active: false,
    },
    {
      title: "Create Prescription",
      text: "Generate prescriptions with patient vitals, diagnosis, and medicines.",
      path: "/doctor/add-prescription",
      icon: "💊",
      active: false,
    },
    {
      title: "Lab Reports",
      text: "Review uploaded blood tests, X-ray reports, and medical documents.",
      path: "/doctor/patient-history",
      icon: "🧪",
      active: false,
    },
    {
      title: "Telemedicine",
      text: "Start remote video consultation for online patient appointments.",
      path: "/doctor/appointments",
      icon: "💻",
      active: false,
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Check Appointments",
      text: "Review today’s appointment requests and upcoming consultation schedule.",
    },
    {
      number: "02",
      title: "Search Patient History",
      text: "Find patients by ID and review previous medical conditions.",
    },
    {
      number: "03",
      title: "Update Health Record",
      text: "Add diagnosis, symptoms, treatment, and consultation notes.",
    },
    {
      number: "04",
      title: "Create Prescription",
      text: "Add medication, dosage, instructions, and issue date.",
    },
    {
      number: "05",
      title: "Give Suggestion",
      text: "Provide follow-up advice and medical guidance to patients.",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Completed") return "doctor-status completed";
    if (status === "In Consultation") return "doctor-status active";
    if (status === "Emergency") return "doctor-status emergency";
    return "doctor-status waiting";
  };

  return (
    <DashboardLayout role="doctor">
      <div className="doctor-template-page">
        <section className="doctor-template-hero">
          <div className="doctor-hero-left doctor-animate-left">
            <p className="doctor-breadcrumb">Home &gt; Doctor Dashboard</p>

            <h1>Doctor Dashboard</h1>

            <p>
              Manage appointments, patient queue, electronic health records,
              prescriptions, telemedicine, lab reports, and medical suggestions.
            </p>
          </div>

          <div className="doctor-hero-illustration doctor-float-animation">
            <div className="doctor-image-card">
              <img src="/images/doctor.jpg" alt="Doctor team" />
            </div>

            <div className="doctor-star doctor-star-one">✦</div>
            <div className="doctor-star doctor-star-two">✦</div>
          </div>
        </section>

        <section className="doctor-dashboard-overview">
          <div className="doctor-stats-grid">
            {stats.map((item, index) => (
              <div
                className="doctor-stat-card-blue doctor-card-animation"
                style={{ animationDelay: `${index * 0.12}s` }}
                key={item.title}
              >
                <p>{item.title}</p>
                <h2>{item.value}</h2>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="doctor-queue-card doctor-card-animation">
            <div className="doctor-table-header">
              <div>
                <p className="doctor-small-label">Patient Queue</p>
                <h2>Today’s Appointments</h2>
              </div>

              <Link to="/doctor/appointments" className="doctor-table-link">
                View All
              </Link>
            </div>

            <div className="doctor-table-wrapper">
              <table className="doctor-queue-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Appointment Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {todayQueue.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.appointmentTime}</td>
                      <td>
                        <span className={getStatusClass(patient.status)}>
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="doctor-services-area">
          <div className="doctor-section-heading-left doctor-animate-left">
            <p className="doctor-small-label">Doctor Features</p>
            <h2>Clinical Modules</h2>
            <p>
              Use these modules to manage the doctor-side workflow connected to
              appointments, patient history, health records, prescriptions, and
              suggestions.
            </p>
          </div>

          <div className="doctor-services-grid">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={service.title}
                className={
                  service.active
                    ? "doctor-service-box doctor-service-active doctor-card-animation"
                    : "doctor-service-box doctor-card-animation"
                }
                style={{ animationDelay: `${index * 0.09}s` }}
              >
                <div className="doctor-service-icon">
                  <span>{service.icon}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <span className="doctor-read-btn">Open</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="doctor-workflow-area">
          <div className="doctor-workflow-left doctor-animate-left">
            <p className="doctor-small-label">How it works</p>

            <h2>
              Our Doctor
              <br />
              Workflow
            </h2>

            <div className="doctor-workflow-list">
              {workflow.slice(0, 3).map((item, index) => (
                <div
                  className="doctor-workflow-item doctor-step-animation"
                  style={{ animationDelay: `${index * 0.14}s` }}
                  key={item.number}
                >
                  <div className="doctor-workflow-number">{item.number}</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="doctor-workflow-right">
            <div className="doctor-process-art doctor-image-process-art doctor-float-animation">
              <div className="doctor-process-image-card">
                <img
                  src="/images/elements.jpg"
                  alt="Medical workflow elements"
                />
              </div>

              <div className="doctor-art-star art-star-one">✦</div>
              <div className="doctor-art-star art-star-two">✦</div>
            </div>

            <div className="doctor-workflow-bottom">
              {workflow.slice(3).map((item, index) => (
                <div
                  className="doctor-workflow-item doctor-step-animation"
                  style={{ animationDelay: `${index * 0.16}s` }}
                  key={item.number}
                >
                  <div className="doctor-workflow-number">{item.number}</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="doctor-footer">
          <div className="doctor-footer-grid">
            <div>
              <h3>
                health<span>iva.</span>
              </h3>

              <p>
                Hospital Patient–Doctor Management System for appointment,
                record, prescription, and suggestion management.
              </p>

              <div className="doctor-socials">
                <span>DR</span>
                <span>PT</span>
                <span>HR</span>
              </div>
            </div>

            <div>
              <h4>Doctor</h4>
              <p>Appointments</p>
              <p>Patient History</p>
              <p>Health Records</p>
            </div>

            <div>
              <h4>Links</h4>
              <p>Prescriptions</p>
              <p>Suggestions</p>
              <p>Lab Reports</p>
            </div>

            <div>
              <h4>Contact</h4>
              <p>+123 456 7890</p>
              <p>doctor@healthiva.com</p>
              <p>Hospital Management System</p>
            </div>
          </div>

          <div className="doctor-footer-bottom">
            Copyright © 2026 healthiva. All Rights Reserved.
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
}

export default DoctorDashboard;