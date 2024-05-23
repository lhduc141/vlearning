import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailInfor } from "../../redux/userReducer/userThunk";

const UserInfor = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const [payCourse, setPayCourse] = useState([]);
  console.log("UserInfor ~ payCourse:", payCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailInfor());
    setPayCourse(infoUser.chiTietKhoaHocGhiDanh);
  }, [dispatch]);
  return (
    <div className="my-12">
      <div className="mx-8 flex">
        <div className="w-[20%] text-center mx-auto">
          <img
            src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
            className="w-[10rem] h-[10rem] rounded-full mx-auto"
            alt=""
          />
          <br />
          <span className="text-center text-[1.25rem] font-semibold mx-auto">
            {infoUser?.hoTen}
          </span>
          <div className="text-[#8c8c8c] opacity-70 text-[1rem]">
            Front-End Developer
          </div>
        </div>
        <div className="w-[70%] space-y-8">
          <div className="flex">
            <div>
              <div className="text-[1.5rem] font-bold">Thông tin cá nhân</div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Tài khoản:</span>
                <div>{infoUser?.taiKhoan}</div>
              </div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Mật khẩu:</span>
                <div>{infoUser?.matKhau}</div>
              </div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Họ tên:</span>
                <div>{infoUser?.hoTen}</div>
              </div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Số điện thoại:</span>
                <div>{infoUser?.soDT}</div>
              </div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Đối tượng:</span>{" "}
                {/* Ma loai nguoi dung  */}
                <div>{infoUser?.maLoaiNguoiDung}</div>
              </div>
              <div className="text-black text-[1rem] flex space-x-4">
                <span className="font-semibold">Email</span>
                <div>{infoUser?.email}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-[1.5rem] font-bold">
                Các khóa học đăng kí
              </div>
              <div className="space-y-4">
                {payCourse?.map((item) => {
                  return (
                    <div className="flex border py-4 rounded-xl">
                      <div className="w-[30%] border-r-2">
                        <img
                          src={`${item?.hinhAnh}`}
                          className="h-[10rem] w-fit mx-auto px-2"
                          alt=""
                        />
                      </div>
                      <div className="w-[70%] px-4 text-black">
                        <div className="font-semibold text-[1.25rem]">
                          {item?.tenKhoaHoc}
                        </div>
                        <div>
                          <span>Mô tả: </span>
                          {item?.moTa}
                        </div>
                        <div className="flex justify-between">
                          <div className="flex space-x-2">
                            <div>{item?.luotXem} Lượt xem</div>
                            <span> - </span>
                            <div>{item?.danhGia} Đánh giá</div>
                          </div>
                          <div>Ngày tạo: {item?.ngayTao}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfor;
