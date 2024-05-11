import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/userReducer/userThunk";
import { userService } from "../../service/userService";
import { message } from "antd";
import { setInfoUser } from "../../redux/userReducer/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: async (values) => {
      const { data } = await userService.postLogin(values);

      message.success(data?.message);
      dispatch(setInfoUser(data.content));
      localStorage.setItem("token", data.content.accessToken);
      navigate("/");
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít phải là 4 chữ cái"),
      matKhau: yup
        .string()
        .required("Mật Khẩu không được để trống")
        .min(3, "Mật khẩu ít phải là 3 chữ cái"),
    }),
  });
  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        className="border p-3 rounded-md space-y-3"
        onSubmit={formLogin.handleSubmit}
      >
        <h3 className="text-2xl font-medium">Form đăng nhập</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="taiKhoan">
            Tài khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
            value={formLogin.values.taiKhoan}
          />
          <p className="text-red-500">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="matKhau">
            Mật khẩu
          </label>
          <input
            type="password"
            name="matKhau"
            id="matKhau"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
            value={formLogin.values.matKhau}
          />
          <p className="text-red-500">{formLogin.errors.matKhau}</p>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white rounded p-2 mt-2 w-full"
        >
          Đăng nhập
        </button>
      </form>
      <div className="text-center mt-4">
        <span className="mr-2">Chưa có tài khoản?</span>
        <Link to="/auth/signup" className="text-blue-500">
          Đăng kí ngay
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
