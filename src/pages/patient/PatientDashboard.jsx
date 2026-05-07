import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function PatientDashboard() {
  return (
    <DashboardLayout role="patient">
      <div className="patient-page">
        <section className="patient-hero">
          <div className="patient-hero-text">
            <small>Home &gt; Patient Services</small>
            <h1>Our Patient Services</h1>
            <p>
              Manage appointments, medical history, health records,
              prescriptions, and doctor suggestions from one simple dashboard.
            </p>
          </div>

          <div className="patient-hero-art">
            <span className="hero-star hero-star-left">✦</span>
            <span className="hero-star hero-star-top">✦</span>
            <span className="hero-star hero-star-right">✦</span>
            <span className="hero-star hero-star-bottom">✦</span>
            <span className="hero-dot hero-dot-one"></span>
            <span className="hero-dot hero-dot-two"></span>
            <span className="hero-puzzle">🏥</span>
          </div>
        </section>

        <section className="patient-container">
          <div className="patient-section-label">Patient Features</div>
          <h2 className="patient-section-title">What You Can Do</h2>

          <div className="patient-grid">
            <div className="patient-card">
              <div className="patient-card-icon">☎️</div>
              <h3>Book Appointment</h3>
              <p>
                Select a doctor, choose a time slot, and submit an appointment
                request.
              </p>
              <Link className="patient-btn" to="/patient/book-appointment">
                Read More
              </Link>
            </div>

            <div className="patient-card featured">
              <div className="patient-card-icon">📞</div>
              <h3>My Appointments</h3>
              <p>
                View pending, confirmed, or cancelled appointments in one place.
              </p>
              <Link className="patient-btn" to="/patient/appointments">
                Read More
              </Link>
            </div>

            <div className="patient-card">
              <div className="patient-card-icon">🫀</div>
              <h3>Medical History</h3>
              <p>
                Check previous and current medical conditions recorded in the
                system.
              </p>
              <Link className="patient-btn" to="/patient/medical-history">
                Read More
              </Link>
            </div>

            <div className="patient-card">
              <div className="patient-card-icon">📝</div>
              <h3>Health Records</h3>
              <p>
                View diagnosis, symptoms, and treatment details added by doctors.
              </p>
              <Link className="patient-btn" to="/patient/health-records">
                Read More
              </Link>
            </div>

            <div className="patient-card">
              <div className="patient-card-icon">💊</div>
              <h3>Prescriptions</h3>
              <p>
                See medication name, dosage, instructions, and prescription
                date.
              </p>
              <Link className="patient-btn" to="/patient/prescriptions">
                Read More
              </Link>
            </div>

            <div className="patient-card">
              <div className="patient-card-icon">🩺</div>
              <h3>Doctor Suggestions</h3>
              <p>
                Read doctor advice, suggestions, and follow-up instructions.
              </p>
              <Link className="patient-btn" to="/patient/suggestions">
                Read More
              </Link>
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div>
            <div className="patient-section-label">How It Works</div>
            <h2 className="patient-section-title">Patient Workflow</h2>

            <div className="workflow-list">
              <div className="workflow-item">
                <div className="workflow-number">01</div>
                <div>
                  <h4>Appointment Request</h4>
                  <p>Patient selects a doctor and submits appointment request.</p>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-number">02</div>
                <div>
                  <h4>Schedule Confirmation</h4>
                  <p>Receptionist confirms or updates appointment schedule.</p>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-number">03</div>
                <div>
                  <h4>Doctor Review</h4>
                  <p>Doctor reviews patient history and health records.</p>
                </div>
              </div>

              <div className="workflow-item">
                <div className="workflow-number">04</div>
                <div>
                  <h4>Prescription & Suggestion</h4>
                  <p>Patient views prescription and doctor suggestions.</p>
                </div>
              </div>
            </div>
          </div>

         <div className="workflow-art">
  <span className="workflow-icon workflow-light">💡</span>
  <span className="workflow-icon workflow-gear-one">⚙️</span>
  <span className="workflow-icon workflow-gear-two">⚙️</span>
  <span className="workflow-icon workflow-check">✓</span>
  <span className="workflow-icon workflow-spark">✦</span>
  <span className="workflow-icon workflow-spark-two">✦</span>
  <span className="workflow-icon workflow-spark-three">✦</span>
  <span className="workflow-person">👩‍⚕️</span>
</div>
        </section>

        <footer className="patient-footer">
          <div className="patient-footer-grid">
            <div>
              <h3>
                health<span>iva.</span>
              </h3>
              <p>
                Hospital Patient–Doctor Management System for appointments,
                records, prescriptions, and doctor suggestions.
              </p>
            </div>

            <div>
              <h4>Patient</h4>
              <ul>
                <li>Appointments</li>
                <li>Medical History</li>
                <li>Prescriptions</li>
              </ul>
            </div>

            <div>
              <h4>System</h4>
              <ul>
                <li>Secure Records</li>
                <li>Doctor Review</li>
                <li>Digital Reports</li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <p>+880 1234 567890</p>
              <p>info@healthiva.com</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="patient-footer-bottom">
            Copyright © 2026 healthiva. All Rights Reserved.
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
}

export default PatientDashboard;