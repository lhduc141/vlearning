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
      <nav className="text-black font-semibold">
        <span className="text-3xl font-bold">Liên kết</span>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Trang chủ
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Dịch vụ
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Nhóm
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Blog
        </NavLink>
      </nav>
      <nav className="text-black font-semibold">
        <span className="text-3xl font-bold">Liên kết</span>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Front End
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Back End
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Full Stack
        </NavLink>
        <NavLink className="mt-3 translate-y-0.5 transition ease-in-out delay-50 hover:translate-y-0 hover:text-[var(--colorGlobal)]">
          <i className="fas fa-chevron-right"></i> Node Js
        </NavLink>
      </nav>

      <form>
        <h6 className="text-3xl font-bold text-black">Đăng ký tư vấn</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Nhập thông tin</span>
          </label>
          <input
            type="text"
            placeholder="Họ và tên"
            className="input input-bordered join-item mt-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered join-item my-2"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="input input-bordered join-item my-2"
          />
          <button className="btn btn-primary join-item">Subscribe</button>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
