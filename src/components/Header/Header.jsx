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
          <Search />
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              suffix={<SearchOutlined />}
              class="input input-bordered w-24 md:w-auto"
            />
          </div>
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
