import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "./Schedule.css";

const Schedule = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="schedule " data-aos="fade-right">
      <h1>
        Acompanhe nossa agenda pelo{" "}
        <a
          href="https://www.instagram.com/lippebragacantor"
          target="_blank"
          rel="noreferrer"
        >
          Instagram!
        </a>
      </h1>
    </div>
  );
};

export default Schedule;
