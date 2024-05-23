import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCourse } from "../../redux/courseReducer/courseThunk";
import { useNavigate } from "react-router-dom";

const BuyCourse = ({ detailCourse }) => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submitCourse = () => {
    let dataCourse = {
      maKhoaHoc: detailCourse.data?.maKhoaHoc,
      taiKhoan: infoUser.taiKhoan,
    };
    dispatch(buyCourse(dataCourse));
    nav(`/buy-success/${detailCourse.data?.maKhoaHoc}`);
  };

  return (
    <div className="border rounded-2xl p-4 space-y-8">
      <div className="text-[2rem] text-black font-semibold">
        Đăng ký khóa học
      </div>
      <img
        src={detailCourse.data?.hinhAnh}
        className="w-fit h-[10rem] mx-auto"
        alt=""
      />
      <div className="text-black text-[1.5rem]">
        <span className="text-[var(--colorSPrimary)]">
          {detailCourse.data?.luotXem} lượt xem
        </span>
        <div>
          <span className="text-[var(--colorGlobal)]">Học phí:</span> 400.000
          vnd
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            submitCourse();
          }}
          className="w-full border rounded-full bg-[#41b294] text-white text-[1.5rem] py-2 hover:bg-[#1c5a49]"
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default BuyCourse;
