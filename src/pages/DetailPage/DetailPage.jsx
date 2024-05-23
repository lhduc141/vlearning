import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCourse } from "../../redux/courseReducer/courseThunk";
import IntroduceCourse from "./IntroduceCourse";
import BuyCourse from "./BuyCourse";

const DetailPage = () => {
  const [detail, setDetail] = useState();
  const { maKhoaHoc } = useParams();
  const dispatch = useDispatch();
  const { detailCourse } = useSelector((state) => state.courseReducer);
  console.log("DetailPage ~ detailCourse:", detailCourse.data);

  useEffect(() => {
    dispatch(getDetailCourse(maKhoaHoc));
  }, [dispatch, maKhoaHoc]);

  return (
    <div className="mb-24">
      <div className="bg-[var(--colorSPrimary)] w-full h-fit text-white">
        <div className="p-12">
          <div className="text-[2rem]">THÔNG TIN KHÓA HỌC</div>
          <div className="">TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</div>
        </div>
      </div>

      <div className="p-12">
        <div className="flex">
          {/* detail course  */}
          <div className="w-[70%] ">
            <IntroduceCourse detailCourse={detailCourse} />
          </div>

          {/* Buy course */}
          <div className="w-[30%]">
            <BuyCourse detailCourse={detailCourse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
