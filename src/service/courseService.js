import { MA_NHOM, http } from "./urlConfig";

export const courseService = {
  getListCourse: () => {
    let url = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=${MA_NHOM}`;
    return http.get(url);
  },

  getCourses: () => http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc"),

  editCourse: (data) => http.put("/api/QuanLyKhoaHoc/CapNhatKhoaHoc", data),

  deleteCourse: (MaKhoaHoc) =>
    http.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${MaKhoaHoc}`),

  getDanhMucKhoaHoc: () => http.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`),

  createCourse: (data) => http.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`, data),

  uploadImage: () => http.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`),
};
