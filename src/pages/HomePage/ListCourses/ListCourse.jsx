import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseThunk } from "../../../redux/courseReducer/courseThunk";
import ShowListCourse from "./ShowListCourse";

const ListCourse = () => {
  const [dataList, SetDataList] = useState([]);
  const [cate, setCate] = useState("all");
  const dispatch = useDispatch();

  const { listCourse } = useSelector((state) => state.courseReducer);
  console.log("ListCourse ~ listCourse:", listCourse);

  useEffect(() => {
    dispatch(getCourseThunk());
    SetDataList(listCourse);
  }, []);

  const selectedIndices = [1, 4, 20, 30, 40, 50, 60, 70];

  return (
    <div className="py-10 container">
      <div className="mx-10">
        <div className="flex space-x-4">
          <button
            id="khoahocphobien"
            style={{
              color: "var(--colorSPrimary)",
              fontWeight: 600,
              paddingBottom: "2rem",
            }}
            onClick={() => setCate("all")}
          >
            KHÓA HỌC PHỔ BIẾN
          </button>
          <button
            id="khoahocphobien"
            style={{
              color: "var(--colorSPrimary)",
              fontWeight: 600,
              paddingBottom: "2rem",
            }}
            onClick={() => setCate("FrontEnd")}
          >
            FRONT-END
          </button>
          <button
            id="khoahocphobien"
            style={{
              color: "var(--colorSPrimary)",
              fontWeight: 600,
              paddingBottom: "2rem",
            }}
            onClick={() => setCate("BackEnd")}
          >
            BACK-END
          </button>
        </div>
        {/* {showCourse()} */}

        <ShowListCourse dataList={dataList} cate={cate} />
      </div>
    </div>
  );
};

export default ListCourse;
