import React, { useState, useEffect } from "react";
import AdminTop from "../../../components/App/AdminTop";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { userService } from "../../../service/userService";
import { MA_NHOM } from "../../../service/urlConfig";
import toast from "react-hot-toast";

const UserCreateUpdate = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setUserData({ ...state, soDT: state.soDt, maNhom: MA_NHOM });
    }
  }, [state]);

  const isCreatePage = pathname.includes("create");
  const [userData, setUserData] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    maNhom: MA_NHOM,
    email: "",
    soDT: "",
  });
  const [userType, setUserType] = useState([]);

  useEffect(() => {
    const getUserType = async () => {
      const res = await userService.getUserType();
      setUserType(res.data);
    };
    getUserType();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check email
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(userData.email)) {
      toast.error("Email không hợp lệ");
      return;
    }

    // check taikhoan min length is 6, password is 6
    if (userData.taiKhoan?.length < 6 || userData.matKhau?.length < 6) {
      toast.error("Tài khoản và mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    // check hoten is text

    try {
      if (isCreatePage) {
        await toast.promise(userService.createUser(userData), {
          loading: "Đang tạo...",
          success: "Tạo thành công",
          error: (e) => e?.response?.data,
        });
      } else {
        await toast.promise(userService.editUser(userData), {
          loading: "Đang lưu...",
          success: "Lưu thành công",
          error: (e) => e?.response?.data,
        });
        toast.success("Cập nhật người dùng thành công");
      }
      navigate("/admin/users/list");
    } catch (error) {
      console.error("Error:", error);
      // toast.error("Tạo người dùng thất bại");
    }
  };

  return (
    <div className="bg-neutral-50 m-3 p-5 h-screen">
      <AdminTop />

      <div className="flex flex-col justify-end mx-auto w-full">
        <h1 className="text-center font-bold text-base-300 text-2xl">
          {isCreatePage
            ? "Tạo người dùng"
            : `Chỉnh sửa thông tin: ${userData?.hoTen}`}
        </h1>
        <div className="flex flex-col mt-5 gap-5 w-[500px] mx-auto">
          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Tài khoản: </label>
            <TextField
              sx={{ width: "70%" }}
              size="small"
              name="taiKhoan"
              placeholder="Nhập tài khoản"
              value={userData.taiKhoan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Họ tên: </label>
            <TextField
              sx={{ width: "70%" }}
              size="small"
              name="hoTen"
              placeholder="Nhập họ tên"
              value={userData.hoTen}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Email: </label>
            <TextField
              sx={{ width: "70%" }}
              size="small"
              name="email"
              placeholder="Nhập Email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Mật khẩu : </label>
            <TextField
              sx={{ width: "70%" }}
              size="small"
              name="matKhau"
              placeholder="Nhập mật khẩu"
              value={userData.matKhau}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Số điện thoại : </label>
            <TextField
              sx={{ width: "70%" }}
              size="small"
              name="soDT"
              placeholder="Nhập Số điện thoại"
              value={userData.soDT}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row justify-end items-center gap-3">
            <label htmlFor="">Loại người dùng: </label>
            <FormControl sx={{ width: "70%" }}>
              <InputLabel id="demo-simple-select-label">
                Loại người dùng
              </InputLabel>
              <Select
                value={userData.maLoaiNguoiDung || userType[0]?.maLoaiNguoiDung}
                label="Loại người dùng"
                onChange={handleChange}
                name="maLoaiNguoiDung"
                id="demo-simple-select-label"
              >
                {userType?.map((item) => (
                  <MenuItem
                    key={item?.maLoaiNguoiDung}
                    value={item?.maLoaiNguoiDung}
                  >
                    {item?.tenLoaiNguoiDung}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button
            fullWidth
            variant="contained"
            color="warning"
            onClick={handleSubmit}
          >
            {isCreatePage ? "Tạo" : " Cập nhật"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCreateUpdate;
