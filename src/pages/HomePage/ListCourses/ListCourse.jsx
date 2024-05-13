import React, { useEffect, useState } from "react";
import { courseService } from "../../../service/courseService";

const ListCourse = () => {
  const [dataList, SetDataList] = useState([]);
  useEffect(() => {
    fetchListCourse();
  }, []);

  const fetchListCourse = async () => {
    try {
      const response = await courseService.getListCourse();
      console.log("fetchListCourse ~ response:", response.data);
      SetDataList(response.data);
    } catch (error) {
      console.log("fetchListCourse ~ error:", error);
    }
  };

  const selectedIndices = [1, 4, 20, 30, 40, 50, 60, 70];

  const showCourse = () => {
    if (dataList.length === 0) {
      return <div>No courses available</div>;
    }

    return (
      <div className="">
        <div className="grid grid-cols-2">
          {selectedIndices.map((index) => (
            <div key={index} className="">
              <div class="card card-side bg-none shadow-xl mr-12 mb-12 h-[250px]">
                <figure className="w-[40%] m-2">
                  <img
                    src={`${dataList[index].hinhAnh}`}
                    alt="Movie"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fit",
                      borderRadius: "10px",
                    }}
                  />
                </figure>
                <div class="card-body w-[60%] align-middle">
                  <h2
                    class="card-title text-black"
                    style={{
                      textShadow: "5px 5px 8px rgba(98, 181, 181, 0.30)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {dataList[index].tenKhoaHoc}
                  </h2>
                  <p>{dataList[index].moTa.substring(0, 75)}...</p>
                  <div className="flex justify-between">
                    <div className="my-auto">
                      <div class="rating gap-1 w-[100%] justify-end ">
                        <input
                          type="radio"
                          name="rating-3"
                          class="mask mask-heart bg-error"
                        />
                        <input
                          type="radio"
                          name="rating-3"
                          class="mask mask-heart bg-error"
                        />
                        <input
                          type="radio"
                          name="rating-3"
                          class="mask mask-heart bg-error"
                        />
                        <input
                          type="radio"
                          name="rating-3"
                          class="mask mask-heart bg-error"
                        />
                        <input
                          type="radio"
                          name="rating-3"
                          class="mask mask-heart bg-error"
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "green",
                        }}
                      >
                        View: {dataList[index].luotXem}
                      </div>
                    </div>
                    <div class="card-actions justify-end">
                      <div class="rating gap-1 w-[100%] justify-end ">
                        <div
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "red",
                          }}
                        >
                          400.000vnd
                        </div>
                      </div>
                      <button class="btn">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-10 container">
      <div className="mx-10">
        <div
          style={{
            color: "var(--colorSPrimary)",
            fontWeight: 600,
            paddingBottom: "2rem",
          }}
        >
          KHÓA HỌC PHỔ BIẾN
        </div>
        {showCourse()}
      </div>
    </div>
  );
};

export default ListCourse;
