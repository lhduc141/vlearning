import React from "react";
import { Outlet } from "react-router-dom";
const AuthTemplate = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 bg-black h-full"></div>
      <div className="w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
