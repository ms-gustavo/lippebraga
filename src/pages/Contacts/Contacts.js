import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "./Contacts.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="contacts-container" data-aos="fade-down">
      <div className="contacts">
        <a
          href="https://www.instagram.com/lippebragacantor"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/lippebragaoficial"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
        <a
          href="https://wa.me/5571992103870?text=Tenho%20interesse%20em%20contratar%20seus%20serviços%20para%20meu%20evento.%20Poderia%20me%20passar%20mais%20informações%20sobre?"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Contacts;
