import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5380</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>
            <i className="fas fa-dollar-sign"></i> USD
          </p>
          <p className="transaction-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-links">
        <div className="footer-section">
          <h4 onClick={() => toggleSection('metta')}>
            metta muse
            <span className="accordion-icon">{openSection === 'metta' ? '−' : '+'}</span>
          </h4>
          <ul className={openSection === 'metta' ? 'open' : ''}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 onClick={() => toggleSection('quick')}>
            QUICK LINKS
            <span className="accordion-icon">{openSection === 'quick' ? '−' : '+'}</span>
          </h4>
          <ul className={openSection === 'quick' ? 'open' : ''}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 onClick={() => toggleSection('follow')}>
            FOLLOW US
            <span className="accordion-icon">{openSection === 'follow' ? '−' : '+'}</span>
          </h4>
          <div className={`footer-content ${openSection === 'follow' ? 'open' : ''}`}>
            <div className="social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>

            <h4 className="accepts-title">metta muse ACCEPTS</h4>
            <div className="payments">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="visa"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="mastercard"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="applepay"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="googlepay"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="stripe"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="paypal"/>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettāmuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
