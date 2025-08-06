import "../styles/Footer.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-container">
        <div className="brand-col">
          <img src="/logo.png" alt="Malik Arshman Traders" className="logo" />
          <div className="brand-info">
            <h3>Malik Arshman Traders</h3>
            <p className="tagline">
              Industrial & Surgical Supplies — Trusted partner since 2023. CEO &
              Sole Proprietor: Wajid Younis.
              {/* {(index = 2)} */}
            </p>
          </div>
        </div>

        <div className="links-col">
          <div className="col-title">Contact</div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+923215221993">+92 321 5221993</a>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="icon" />
            <a
              href={`https://wa.me/923215221993?text=Hi I Found your contact on Malik Arshman Traders website.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:info@malikarshmantraders.com">
              info@malikarshmantraders.com
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Karachi, Pakistan</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>
              Shop No 01,Opposite Meezan Bank,Main Allaabad Road Westridge III
              Rawalpindi Cantt
            </span>
          </div>
        </div>

        <div className="extra-col">
          <div className="col-title">Quick Links</div>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Malik Arshman Traders. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
