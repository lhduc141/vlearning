import React, { useEffect, useState } from "react";
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
import { courseService } from "../../../service/courseService";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { BASE_URL, TOKEN_CYBER } from "../../../service/urlConfig";

// arr maNhom GP01 - GP15

const arrMaNhom = [
  "GP01",
  "GP02",
  "GP03",
  "GP04",
  "GP05",
  "GP06",
  "GP07",
  "GP08",
  "GP09",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GP14",
  "GP15",
];

const CoursesCreateUpdate = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("https://elearningnew.cybersoft.edu.vn/hinhanh/back-end_gp01.jpeg");
  const [LayDanhMucKhoaHoc, setLayDanhMucKhoaHoc] = useState([]);

  const isCreatePage = pathname.includes("create");
  const user = useSelector((state) => state.userReducer.infoUser);
  const [courseData, setCourseData] = useState({
    maKhoaHoc: "",
    biDanh: "manh",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 1000000,
    danhGia: 10000000,
    hinhAnh: "",
    maNhom: arrMaNhom[0],
    ngayTao: new Date(),
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: user?.taiKhoan,
  });

  useEffect(() => {
    if (state) {
      setCourseData({
        ...courseData,
        ...state,
        maDanhMucKhoaHoc: state?.danhMucKhoaHoc?.maDanhMucKhoahoc,
        taiKhoanNguoiTao: state?.taiKhoanNguoiTao,
      });

      setImageSelected(state.hinhAnh);
    }

    if (isCreatePage)
      setCourseData({
        ...courseData,
        taiKhoanNguoiTao: user?.taiKhoan,
      });
  }, [state, user]);

  useEffect(() => {
    const fetchDanhMuc = async () => {
      try {
        const { data } = await courseService.getDanhMucKhoaHoc();
        setLayDanhMucKhoaHoc(data);
      } catch (error) {}
    };
    fetchDanhMuc();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isCreatePage) {
        await toast.promise(courseService.createCourse({...courseData, hinhAnh: "https://elearningnew.cybersoft.edu.vn/hinhanh/back-end_gp01.jpeg"}), {
          loading: "Đang tạo...",
          success: "Tạo thành công",
          error: (e) => e?.response?.data,
        });
        navigate("/admin/courses/list");
      } else
        await toast.promise(courseService.editCourse(courseData), {
          loading: "Đang lưu...",
          success: "Lưu thành công",
          error: "Lưu thất bại",
        });
      navigate("/admin/courses/list");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectImage = async (e) => {
    // upoad the image from formData
    const formData = new FormData();
    formData.append("hinhAnh", e.target.files[0]);
    const res = await fetch(
      `${BASE_URL}api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          TokenCybersoft: TOKEN_CYBER,
        },
        body: JSON.stringify(courseData),
      }
    );

    console.log(res);
  };

  return (
    <div className="bg-neutral-50 m-3 p-5 h-screen">
      <AdminTop />

      <div className="flex flex-col justify-end mx-auto w-full">
        <h1 className="text-center font-bold text-base-300 text-2xl">
          {isCreatePage
            ? "Tạo khóa học mới"
            : `  Chỉnh sửa thông tin: ${courseData.maKhoaHoc}`}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-5 gap-3 w-[500px] mx-auto">
            <div className="flex flex-row justify-end items-center gap-3">
              <label htmlFor="maKhoaHoc">Mã khóa học:</label>
              <TextField
                sx={{ width: "60%" }}
                size="small"
                name="maKhoaHoc"
                value={courseData.maKhoaHoc}
                onChange={handleChange}
                placeholder="Nhập Mã khóa học"
              />
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              <label htmlFor="tenKhoaHoc">Tên khóa học:</label>
              <TextField
                sx={{ width: "60%" }}
                size="small"
                name="tenKhoaHoc"
                value={courseData.tenKhoaHoc}
                onChange={handleChange}
                placeholder="Nhập tên khóa học"
              />
            </div>

            <div className="flex flex-row justify-end items-center gap-3">
              <label htmlFor="moTa">Mã nhóm:</label>
              <FormControl sx={{ width: "60%" }}>
                <InputLabel>Mã nhóm</InputLabel>
                <Select
                  value={courseData.maNhom || arrMaNhom[0]}
                  onChange={handleChange}
                  name="maNhom"
                  label="maNhom"
                >
                  {arrMaNhom?.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              <label htmlFor="moTa">Danh mục khóa học:</label>
              <FormControl sx={{ width: "60%" }}>
                <InputLabel>Danh mục khóa học</InputLabel>
                <Select
                  value={courseData.maDanhMucKhoaHoc}
                  onChange={handleChange}
                  label="maDanhMucKhoaHoc"
                  name="maDanhMucKhoaHoc"
                >
                  {LayDanhMucKhoaHoc?.map((item) => (
                    <MenuItem value={item?.maDanhMuc}>
                      {item?.tenDanhMuc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="flex flex-row justify-end items-center gap-3">
              <label htmlFor="moTa">Mô tả:</label>
              <TextField
                sx={{ width: "60%" }}
                size="small"
                name="moTa"
                value={courseData.moTa}
                onChange={handleChange}
                placeholder="Nhập mô tả"
                multiline
              />
            </div>

            {/* ui upload image */}
            <Button>
              <input type="file" id="hinhAnh" onChange={handleSelectImage} />
              {imageSelected && (
                <img
                  src={imageSelected}
                  alt="hinhAnh"
                  className="h-[100px] object-cover"
                />
              )}
            </Button>

            <Button type="submit" fullWidth variant="contained" color="warning">
              {isCreatePage ? "Tạo" : " Cập nhật"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoursesCreateUpdate;
