import { MA_NHOM, http } from "./urlConfig";

export const courseService = {
  getListCourse: () => {
    let url = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=${MA_NHOM}`;
    return http.get(url);
  },
};
