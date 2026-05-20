import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function SystemSettings() {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    dailyBackup: true,
    dataEncryption: true,
    maintenanceMode: false,
  });

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  return (
    <DashboardLayout role="admin">
      <div className="admin-page">
        <section className="admin-hero">
          <div>
            <p className="admin-label">Admin &gt; System Settings</p>
            <h1>System Settings</h1>
            <p>
              Control sensitive platform settings including security,
              backups, encryption, and maintenance mode.
            </p>
          </div>

          <div className="admin-hero-card danger">
            <h3>Sensitive Access</h3>
            <p>Only administrators should manage these settings.</p>
          </div>
        </section>

        <section className="admin-content">
          <div className="admin-settings-grid">
            {Object.entries(settings).map(([key, value]) => (
              <div className="admin-setting-card" key={key}>
                <div>
                  <h3>{key.replace(/([A-Z])/g, " $1")}</h3>
                  <p>{value ? "Enabled" : "Disabled"}</p>
                </div>

                <button
                  className={value ? "admin-toggle on" : "admin-toggle"}
                  onClick={() => toggleSetting(key)}
                >
                  {value ? "ON" : "OFF"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default SystemSettings;