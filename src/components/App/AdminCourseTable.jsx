import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { courseService } from "../../service/courseService";

export default function AdminCourseTable({ courses, setCourses }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await toast.promise(courseService.deleteCourse(id), {
        loading: "Đang xóa...",
        success: "Xóa thành công",
        error: (e) => e?.response?.data,
      });
      setCourses(courses.filter((c) => c.maKhoaHoc !== id));
    } catch (error) {
      // toast.error("Xóa thất bại");
    }
  };

  const columns = [
    { field: "maKhoaHoc", headerName: "Mã khóa học", width: 100 },
    { field: "tenKhoaHoc", headerName: "Tên khóa học", width: 200 },
    {
      field: "hinhAnh",
      headerName: "Hình ảnh",
      width: 120,
      renderCell: ({ row }) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={row.hinhAnh}
              alt={row.tenKhoaHoc}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        );
      },
    },
    {
      field: "soLuongHocVien",
      headerName: "Số lượng học viên",
      width: 130,
    },
    {
      field: "luotXem",
      headerName: "Lượt xem",
      sortable: false,
      width: 100,
    },
    {
      field: "danhMucKhoaHoc",
      headerName: "Danh mục khóa học",
      sortable: false,
      width: 201,
      renderCell: ({ row }) => (
        <Typography>{row?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</Typography>
      ),
    },
    {
      field: "nguoiTao",
      headerName: "Người tạo",
      sortable: false,
      width: 161,
      renderCell: ({ row }) => <Typography>{row?.nguoiTao?.hoTen}</Typography>,
    },
    {
      field: "ngayTao",
      headerName: "Ngày tạo",
      sortable: false,
      width: 101,
    },
    {
      field: "moTa",
      headerName: "Mô tả",
      sortable: false,
      width: 251,
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
              navigate(`/admin/courses/update/${params?.id}`, {
                state: params?.row,
              })
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params?.row?.maKhoaHoc)}
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
        getRowId={(item) => item.maKhoaHoc}
        rows={courses}
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
