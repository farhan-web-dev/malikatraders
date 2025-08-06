import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "923215221993";
  const message = encodeURIComponent(
    "Hi, I found your contact on Malik Arshman Traders website."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
