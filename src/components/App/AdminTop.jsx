import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminTop = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-neutral-50 pb-5 rounded-sm ">
      <h1 className="text-center font-bold text-base-300 text-2xl">
        Welcome Admin . Have a good day!
      </h1>
      <Button
        onClick={() => navigation("/")}
        variant="contained"
        color="warning"
      >
        Về trang chủ
      </Button>
    </div>
  );
};

export default AdminTop;
