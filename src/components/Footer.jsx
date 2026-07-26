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
          <img
            src="/logo.png"
            alt="Malik Arshman Traders"
            className="footer-logo"
          />
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
            <div className="group">
              <a href="tel:+923215221993">
                <b>Karachi:</b>+92 321 5221993
              </a>
              <a href="tel:+923215359436">
                <b>Rawalpindi:</b>03215359436
              </a>
            </div>
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
            <div className="group">
              <span>
                <b>Karachi Office:</b> M-6, M-Floor, Minah Avenue, Opp. Airport, Karachi, Pakistan
              </span>
              <span>
                <b>Rawalpindi Office:</b> Shop No 01, Opp. Meezan Bank, Main Allahabad Road, Westridge III, Rawalpindi
              </span>
            </div>
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
