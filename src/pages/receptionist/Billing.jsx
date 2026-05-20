import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function Billing() {
  const [bills, setBills] = useState([
    {
      bill_id: 1,
      patient_name: "Jami Hasan",
      service: "Doctor Consultation",
      amount: 800,
      status: "Unpaid",
    },
    {
      bill_id: 2,
      patient_name: "Nusrat Jahan",
      service: "Neurology Consultation",
      amount: 1200,
      status: "Paid",
    },
    {
      bill_id: 3,
      patient_name: "Sadia Islam",
      service: "Registration Fee",
      amount: 300,
      status: "Unpaid",
    },
  ]);

  const markPaid = (id) => {
    const updated = bills.map((bill) =>
      bill.bill_id === id ? { ...bill, status: "Paid" } : bill
    );

    setBills(updated);
    localStorage.setItem("billing_records", JSON.stringify(updated));
  };

  return (
    <DashboardLayout role="receptionist">
      <div className="frontdesk-page">
        <section className="frontdesk-hero">
          <div>
            <p className="frontdesk-label">Receptionist &gt; Billing</p>
            <h1>Costing / Billing</h1>
            <p>
              Process patient service costs, consultation fees, and payment
              status for front-desk operations.
            </p>
          </div>

          <div className="frontdesk-hero-card">
            <h3>Billing Desk</h3>
            <p>Consultation, registration, and service costing.</p>
          </div>
        </section>

        <section className="frontdesk-content">
          <div className="frontdesk-table-card">
            <div className="frontdesk-table-wrapper">
              <table className="frontdesk-table">
                <thead>
                  <tr>
                    <th>Bill ID</th>
                    <th>Patient</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {bills.map((bill) => (
                    <tr key={bill.bill_id}>
                      <td>{bill.bill_id}</td>
                      <td>{bill.patient_name}</td>
                      <td>{bill.service}</td>
                      <td>{bill.amount} BDT</td>
                      <td>
                        <span
                          className={
                            bill.status === "Paid"
                              ? "frontdesk-status confirmed"
                              : "frontdesk-status pending"
                          }
                        >
                          {bill.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="frontdesk-table-btn"
                          onClick={() => markPaid(bill.bill_id)}
                        >
                          Mark Paid
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Billing;