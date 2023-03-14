import React from "react";
import "./Navbar.css";

const Navbar = () => {
  function goToSchedule(sectionId) {
    const schedule = document.getElementById(sectionId);
    schedule.scrollIntoView({ behavior: "smooth" });
  }

  function goToContacts(sectionId) {
    const contacts = document.getElementById(sectionId);
    contacts.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="container-fluid navbar justify-content-center">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark pt-2">
            <div className="container-fluid">
              <img
                src="/lippe_logo.png"
                className="lippelogo"
                width={150}
                alt="Lippe Braga"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <button
                      onClick={() => goToSchedule("schedule")}
                      className="nav-link active"
                      aria-current="page"
                      id="navItem"
                    >
                      Agenda
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => goToContacts("contacts")}
                      className="nav-link active"
                      id="navItem"
                    >
                      Contato
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
