import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userService } from "../../service/userService";

export default function AdminUserTable({ users }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await toast.promise(userService.deleteUser(id), {
        loading: "Đang xóa...",
        success: "Xóa thành công",
        error: (e) => e?.response?.data,
      });
    } catch (error) {
      // toast.error("Xóa thất bại");
    }
  };

  const columns = [
    { field: "maLoaiNguoiDung", headerName: "Loại người dùng", width: 270 },
    { field: "hoTen", headerName: "Họ tên", width: 230 },
    { field: "taiKhoan", headerName: "Tài khoản", width: 230 },
    {
      field: "soDt",
      headerName: "Số điện thoại",
      width: 290,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 360,
    },
    {
      field: "actions",
      headerName: "Hành động",
      sortable: false,
      width: 260,
      disableClickEventBubbling: true,
      disableColumnMenu: true,
      disablePadding: true,
      renderCell: (params) => (
        <div>
          <IconButton
            color="primary"
            onClick={() =>
              navigate(`/admin/users/update/${params?.id}`, {
                state: params?.row,
              })
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params?.row?.taiKhoan)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary">
            <FilterAltIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item?.maLoaiNguoiDung}
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
