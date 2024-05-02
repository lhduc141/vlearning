import React from "react";
import { NavLink } from "react-router-dom";
import { Input, Dropdown, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      // icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  const DropDown = () => (
    <Dropdown
      menu={{
        items,
      }}
    >
      <NavLink
        onClick={(e) => e.preventDefault()}
        className="mr-4 hover:text-green-500"
      >
        <Space>
          <i class="fa fa-bars"></i>
          DANH MỤC
          {/* <DownOutlined /> */}
        </Space>
      </NavLink>
    </Dropdown>
  );
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
        </div>

        <div className="font-medium text-[1rem] text-black">
          <div class="dropdown dropdown-hover mx-4">
            <div tabindex="0" class="m-1 bg-none hover:text-green-500">
              <i class="fa fa-bars mr-2"></i>
              DANH MỤC
            </div>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink>Item 1</NavLink>
              </li>
              <li>
                <NavLink>Item 2</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={""} className={"mr-4 hover:text-green-500"}>
            KHÓA HỌC
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-green-500"}>
            BLOG
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-green-500"}>
            SỰ KIỆN
          </NavLink>
          <NavLink to={""} className={"mr-4 hover:text-green-500"}>
            THÔNG TIN
          </NavLink>
        </div>

        <div>
          <button class="btn btn-outline btn-accent">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
