import "./App.css";
import { useEffect } from "react";
// lib
import AOS from "aos";
import "aos/dist/aos.css";
// Routes
import { BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="App scrollspy-example"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      tabIndex="0"
    >
      <BrowserRouter>
        <Navbar />

        <div
          className="container container00 aos-animate"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <Home />
        </div>
        <div
          className="container container01 aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
          id="schedule"
        >
          <Schedule />
        </div>
        <div
          className="container container02 aos-animate"
          data-aos="fade-down"
          data-aos-duration="1000"
          id="contacts"
        >
          <Contacts />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
