import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [activeLogin, setActiveLogin] = useState("");
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });

  const [accountData, setAccountData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  const demoAccounts = {
    patient: {
      id: "Tahia",
      password: "12345678",
      storageKey: "patient_id",
      route: "/patient/dashboard",
      label: "Patient",
    },

    doctor: {
      id: "Jami",
      password: "12345678",
      storageKey: "doctor_id",
      route: "/doctor/dashboard",
      label: "Doctor",
    },

    receptionist: {
      id: "Shanto",
      password: "12345678",
      storageKey: "receptionist_id",
      route: "/receptionist/dashboard",
      label: "Receptionist",
    },

    admin: {
      id: "Foysal",
      password: "12345678",
      storageKey: "admin_id",
      route: "/admin/dashboard",
      label: "Admin",
    },
  };

  const resetScreens = () => {
    setActiveLogin("");
    setShowCreateAccount(false);
    setLoginData({
      userId: "",
      password: "",
    });
  };

  const openLogin = (role) => {
    setActiveLogin(role);
    setShowCreateAccount(false);
    setLoginData({
      userId: "",
      password: "",
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleLogin = (e) => {
    e.preventDefault();

    const account = demoAccounts[activeLogin];

    const enteredId = loginData.userId.trim();
    const enteredPassword = loginData.password.trim();

    if (enteredId === account.id && enteredPassword === account.password) {
      localStorage.setItem("role", activeLogin);
      localStorage.setItem(account.storageKey, enteredId);
      navigate(account.route);
    } else {
      alert(
        `Invalid ${account.label} ID or password. Try ${account.id} and ${account.password}`
      );
    }
  };

  const handleAccountChange = (e) => {
    setAccountData({
      ...accountData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const newPatientAccount = {
      patient_id: accountData.name || "New Patient",
      ...accountData,
      created_at: new Date().toLocaleString(),
    };

    const oldAccounts =
      JSON.parse(localStorage.getItem("created_patient_accounts")) || [];

    localStorage.setItem(
      "created_patient_accounts",
      JSON.stringify([newPatientAccount, ...oldAccounts])
    );

    alert(
      `Account created successfully!\nYour Patient ID is: ${newPatientAccount.patient_id}\nUse your password to login.`
    );

    setShowCreateAccount(false);
    setActiveLogin("patient");

    setAccountData({
      name: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      password: "",
    });
  };

  const getLoginTitle = () => {
    if (!activeLogin) return "";
    return `${demoAccounts[activeLogin].label} Login`;
  };

  const getLoginPlaceholder = () => {
    if (!activeLogin) return "";
    return `Example: ${demoAccounts[activeLogin].id}`;
  };

  return (
    <div className="login-page login-right-layout">
      <div className="login-front-image-area">
        <div className="login-front-image-card">
          <img src="/images/front.jpg" alt="Doctor consultation" />
        </div>

        <span className="login-front-star login-front-star-one">✦</span>
        <span className="login-front-star login-front-star-two">✦</span>
        <span className="login-front-star login-front-star-three">✦</span>
      </div>

      <div className="login-card auth-card login-card-right">
        <h1 className="login-main-title">
          health<span>iva.</span>
        </h1>

        {!activeLogin && !showCreateAccount && (
          <>
            <button className="login-button" onClick={() => openLogin("patient")}>
              Login as Patient
            </button>

            <button className="login-button" onClick={() => openLogin("doctor")}>
              Login as Doctor
            </button>

            <button
              className="login-button"
              onClick={() => openLogin("receptionist")}
            >
              Login as Receptionist
            </button>

            <button className="login-button" onClick={() => openLogin("admin")}>
              Login as Admin
            </button>
          </>
        )}

        {activeLogin && !showCreateAccount && (
          <form className="patient-auth-form" onSubmit={handleRoleLogin}>
            <h2 className="auth-title">{getLoginTitle()}</h2>

            <p className="auth-subtitle">
              Enter your {demoAccounts[activeLogin].label} ID and password to
              continue.
            </p>

            <div className="auth-group">
              <label>{demoAccounts[activeLogin].label} ID</label>
              <input
                type="text"
                name="userId"
                value={loginData.userId}
                onChange={handleLoginChange}
                placeholder={getLoginPlaceholder()}
                required
              />
            </div>

            <div className="auth-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login to {demoAccounts[activeLogin].label} Account
            </button>

            {activeLogin === "patient" && (
              <button
                type="button"
                className="auth-link-button"
                onClick={() => {
                  setShowCreateAccount(true);
                  setActiveLogin("");
                }}
              >
                Create New Patient Account
              </button>
            )}

            <button
              type="button"
              className="auth-back-button"
              onClick={resetScreens}
            >
              Back to Role Selection
            </button>

            <p className="demo-login-text">
              Demo: <strong>{demoAccounts[activeLogin].id}</strong> /{" "}
              <strong>{demoAccounts[activeLogin].password}</strong>
            </p>
          </form>
        )}

        {showCreateAccount && (
          <form className="patient-auth-form" onSubmit={handleCreateAccount}>
            <h2 className="auth-title">Create Patient Account</h2>

            <p className="auth-subtitle">
              Register as a patient to book appointments and view medical data.
            </p>

            <div className="auth-grid">
              <div className="auth-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={accountData.name}
                  onChange={handleAccountChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="auth-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={accountData.dob}
                  onChange={handleAccountChange}
                  required
                />
              </div>

              <div className="auth-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={accountData.gender}
                  onChange={handleAccountChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="auth-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={accountData.phone}
                  onChange={handleAccountChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="auth-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={accountData.email}
                  onChange={handleAccountChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="auth-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={accountData.password}
                  onChange={handleAccountChange}
                  placeholder="Create password"
                  required
                />
              </div>
            </div>

            <div className="auth-group">
              <label>Address</label>
              <textarea
                name="address"
                value={accountData.address}
                onChange={handleAccountChange}
                placeholder="Enter address"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="login-button">
              Create Account
            </button>

            <button
              type="button"
              className="auth-back-button"
              onClick={() => {
                setShowCreateAccount(false);
                setActiveLogin("patient");
              }}
            >
              Already have an account? Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;