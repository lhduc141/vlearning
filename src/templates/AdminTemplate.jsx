import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import { Avatar, Button, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";

const AdminTemplate = () => {
  const user = useSelector((state) => state.userReducer.infoUser);
  const navigate = useNavigate();
  
  const[isLoading, setIsLoading] = useState(true)

useEffect(() => {
  if (!user) return navigate('/')
  
  if (user.taiKhoan !== '1234' || user.email !== "testcapstone12256@gmail.com") return navigate('/')

  setIsLoading(false)
}, [navigate, user])

  const handleLogout = () => {
    navigate("/auth/login");
    localStorage.removeItem("token");
  };


  if (isLoading) return  <LinearProgress color="warning" />;

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 bg-gray-800">
        <AdminSidebar />
      </div>
      <div className="col-span-10 bg-neutral-300">
        <div className="flex flex-row items-center justify-end pr-3 gap-5 bg-neutral-50">
          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
          <Avatar
            src="https://elearning-project-puce.vercel.app/img/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
            sx={{ width: 60, height: 60 }}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
