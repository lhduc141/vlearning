import { http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(url, data);
  },
  postSignup: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return http.post(uri, data);
  },

  updateUser: (data) =>
    http.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data),

  getAccountInfo: () => {
    let url = `/api/QuanLyNguoiDung/ThongTinNguoiDung`;
    return http.post(url);
  },

  createUser: (data) => http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data),

  getUserType: () => http.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),

  getUsers: () => http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung"),

  editUser: (user) =>
    http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user),

  deleteUser: (taiKhoan) =>
    http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`),

  getDetailInfor: () => {
    let url = `/api/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return http.post(url);
  },
};
