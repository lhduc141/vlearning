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

  getDetailCourse: (id) => {
    let url = `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;
    return http.get(url, id);
  },
  buyCourse: (data) => {
    let url = "/api/QuanLyKhoaHoc/DangKyKhoaHoc";
    return http.post(url, data);
  },
  getCoursePage: (data) => {
    let url = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${data}&pageSize=8&MaNhom=${MA_NHOM}`;
    console.log("url:", url);
    return http.get(url, data);
  },
};
