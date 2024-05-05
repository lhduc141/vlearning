import React from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const Search = () => (
    <div>
      <Input
        className="bg-gray-500 text-white"
        placeholder="Tìm kiếm"
        suffix={<SearchOutlined />}
      />
    </div>
  );
  return (
    <section className="header bg-white py-3 z-20 sticky top-0 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto justify-between items-center flex ">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img src="/logo.png" className="h-16 pr-4" alt="" />
          </NavLink>
          {/* <Search /> */}
          <label className="input input-bordered flex items-center gap-2 cursor-pointer">
            <input type="text" className="grow w-36" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 hover:text-black"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="font-medium text-[1rem] text-black">
          <div class="dropdown dropdown-hover  mx-4 cursor-pointer">
            <div tabindex="0" class="m-1 hover:text-[var(--colorGlobal)]">
              <i class="fa fa-bars mr-2"></i>
              DANH MỤC
            </div>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-white border-spacing-2 rounded-md w-52 text-black"
            >
              <li className="py-2 bg-none">
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white">
                  LẬP TRÌNH BACKEND
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white ">
                  THIẾT KẾ WEB
                </NavLink>
              </li>
              <li className="py-2 bg-none">
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white ">
                  LẬP TRÌNH DI ĐỘNG
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white">
                  LẬP TRÌNH FRONT END
                </NavLink>
              </li>
              <li className="py-2 bg-none">
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white ">
                  LẬP TRÌNH FULL STACK
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-ghost glass text-black hover:bg-accent hover:text-white ">
                  TƯ DUY LẬP TRÌNH
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={""} className={"mr-4 hover:text-accent"}>
            KHÓA HỌC
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-accent"}>
            BLOG
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-accent"}>
            SỰ KIỆN
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-accent"}>
            THÔNG TIN
          </NavLink>
        </div>

        <div>
          <button class="btn btn-outline btn-accent ">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
