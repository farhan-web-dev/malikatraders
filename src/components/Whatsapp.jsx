import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "923215221993"; // your WhatsApp number (no "+")

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
