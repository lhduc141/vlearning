import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { userService } from "../service/userService";
import { setInfoUser } from "../redux/userReducer/userSlice";

const HomeTemplate = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await userService.getAccountInfo();
        dispatch(setInfoUser(data.content));
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      checkUser();
    }
  }, [dispatch, token]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
