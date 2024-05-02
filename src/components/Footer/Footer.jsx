import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[var(--colorbg)] text-base-content">
      <nav className="text-black font-semibold">
        <h6
          className="footer-title"
          style={{
            color: "var(--colorText)",
            position: "relative",
            fontSize: "20px",
            transition: "all 0.3s",
            textShadow: "5px -2px 3px  #54d2c0",
          }}
        >
          <span className="text-[60px] text-[var(--colorGlobal)]">V</span>
          learning
        </h6>
        <NavLink>
          <i class="fas fa-phone-alt iconFooter"></i>
          <span>1800-123-4567</span>
        </NavLink>
        <NavLink>
          <i className="fas fa-envelope-open-text iconFooter"></i>
          <span>Design</span>
        </NavLink>
        <NavLink>
          <i class="fas fa-map-marker-alt iconFooter"></i>
          <span>Marketing</span>
        </NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <NavLink>About us</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Jobs</NavLink>
        <NavLink>Press kit</NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <NavLink>Terms of use</NavLink>
        <NavLink>Privacy policy</NavLink>
        <NavLink>Cookie policy</NavLink>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
