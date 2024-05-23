import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursePage } from "../../redux/courseReducer/courseThunk";
import { useNavigate } from "react-router-dom";

const ShowCoursePage = ({ page }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { coursePageList } = useSelector((state) => state.courseReducer);

  useEffect(() => {
    dispatch(getCoursePage(page));
    setData(coursePageList.items);
  }, [page]);
  return (
    <div>
      <div className="grid grid-cols-2">
        {data?.map((item) => (
          <div key={item.maKhoaHoc} className="">
            <div className="card card-side bg-none shadow-xl mr-12 mb-12 h-[250px]">
              <figure className="w-[40%] m-2">
                <img
                  src={`${item.hinhAnh}`}
                  alt="Movie"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fit",
                    borderRadius: "10px",
                  }}
                />
              </figure>
              <div className="card-body w-[60%] align-middle">
                <h2
                  className="card-title text-black"
                  style={{
                    textShadow: "5px 5px 8px rgba(98, 181, 181, 0.30)",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.tenKhoaHoc}
                </h2>
                <p>
                  {item.moTa
                    ? `${item.moTa.substring(0, 75)}...`
                    : "No description available"}
                </p>
                <div className="flex justify-between">
                  <div className="my-auto">
                    <div className="rating gap-1 w-[100%] justify-end ">
                      <input
                        type="radio"
                        name="rating-3"
                        className="mask mask-heart bg-error"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="mask mask-heart bg-error"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="mask mask-heart bg-error"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="mask mask-heart bg-error"
                      />
                      <input
                        type="radio"
                        name="rating-3"
                        className="mask mask-heart bg-error"
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "green",
                      }}
                    >
                      View: {item.luotXem}
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="rating gap-1 w-[100%] justify-end ">
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
                    <button
                      onClick={() => {
                        navigate(`/detail/${item.maKhoaHoc}`);
                      }}
                      className="border text-[var(--colorSPrimary)] border-[var(--colorSPrimary)] px-4 py-2 rounded-lg hover:bg-[var(--colorSPrimary)] hover:text-white"
                    >
                      Xem thêm
                    </button>
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

export default ShowCoursePage;
