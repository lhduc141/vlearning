// File App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/loginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import AdminPage from "./pages/admin";
import UserList from "./pages/admin/users/UserList";
import UserCreateUpdate from "./pages/admin/users/UserCreateUpdate";
import CourcesList from "./pages/admin/cources/CourcesList";
import CourcesCreateUpdate from "./pages/admin/cources/CourcesCreateUpdate";
import { Toaster } from "react-hot-toast";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DetailPage from "./pages/DetailPage/DetailPage";
import BuySuccess from "./pages/DetailPage/BuySuccess";
import KhoaHoc from "./pages/KhoaHoc/KhoaHoc";
import Blog from "./pages/HomePage/Blog/Blog";
import UserInfor from "./pages/UserInfor/UserInfor";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:maKhoaHoc" element={<DetailPage />} />
          <Route path="/buy-success/:maKhoaHoc" element={<BuySuccess />} />
          <Route path="/khoa-hoc" element={<KhoaHoc />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/thongTinCaNhan" element={<UserInfor />} />
        </Route>

        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="/" element={<AdminTemplate />}>
          <Route path="/admin" index element={<AdminPage />} />
          <Route path="/admin/users/list" index element={<UserList />} />
          <Route
            path="/admin/users/create"
            index
            element={<UserCreateUpdate />}
          />
          <Route
            path="/admin/users/update/:userID"
            index
            element={<UserCreateUpdate />}
          />
          <Route path="/admin/courses/list" index element={<CourcesList />} />
          <Route
            path="/admin/courses/create"
            index
            element={<CourcesCreateUpdate />}
          />
          <Route
            path="/admin/courses/update/:id"
            index
            element={<CourcesCreateUpdate />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
