import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailCourse } from "../../redux/courseReducer/courseThunk";
import { useSelector } from "react-redux";

const BuySuccess = () => {
  const { maKhoaHoc } = useParams();
  const navigate = useNavigate();

  const { detailCourse } = useSelector((state) => state.courseReducer);

  return (
    <div className="flex justify-center my-24 ">
      <div className="border px-12 py-8 w-[40rem] rounded-xl">
        <div className="text-[var(--colorSPrimary)] text-[2rem] font-semibold">
          Đăng kí thành công
        </div>
        <div className="my-4">
          <span className="text-black font-bold">Thông tin khóa học</span>
          <div>
            <div>
              <span className="text-black font-bold">Mã khóa học:</span>{" "}
              {detailCourse?.data?.maKhoaHoc}
            </div>
            <div>
              <span className="text-black font-bold">Tên khóa học:</span>{" "}
              {detailCourse?.data?.tenKhoaHoc}
            </div>
            <div>
              <span className="text-black font-bold">Mô tả:</span>
              <br /> {detailCourse?.data?.moTa}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="px-4 py-2 bg-[var(--colorGlobal)] text-white text-[1.2rem] font-semibold rounded-full"
          >
            Quay về
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySuccess;
