import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid navbar justify-content-center">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark pt-2">
            <div className="container-fluid">
              <a>
                <img
                  src="/lippe_logo.png"
                  className="lippelogo"
                  width={150}
                  alt="Lippe Braga"
                />
              </a>
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
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#schedule"
                      id="navItem"
                    >
                      Agenda
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#contacts"
                      id="navItem"
                    >
                      Contato
                    </a>
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
