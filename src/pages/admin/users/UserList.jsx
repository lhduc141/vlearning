import React, { useEffect, useMemo, useState } from "react";
import AdminTop from "../../../components/App/AdminTop";
import { Button, LinearProgress } from "@mui/material";
import Search from "../../../components/App/Search";
import AdminUserTable from "../../../components/App/AdminUserTable";
import { userService } from "../../../service/userService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await userService.getUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  const dataReSearch = useMemo(() => {
    if (!searchQuery) return users;

    return users?.filter((user) => {
      return user?.hoTen?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    });
  }, [searchQuery, users]);

  if (isLoading) return <LinearProgress color="warning" />;

  return (
    <div className="bg-neutral-50 m-3 p-5 h-screen">
      <AdminTop />

      {/* table */}
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl text-base-300 font-bold">
            Quản lý người dùng
          </h1>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/admin/users/create")}
          >
            Thêm người dùng
          </Button>
        </div>

        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <AdminUserTable users={dataReSearch} />
      </div>
    </div>
  );
};

export default UserList;
