import React, { useEffect, useRef, useState } from "react";
import ShowCoursePage from "./ShowCoursePage";

const KhoaHoc = () => {
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  return (
    <div className="mb-24">
      <div
        className="bg-[var(--colorSPrimary)] w-full h-fit text-white"
        ref={topRef}
      >
        <div className="p-12">
          <div className="text-[2rem]">KHOÁ HỌC</div>
          <div className="">TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</div>
        </div>
      </div>

      <div className="flex justify-center mt-16 mx-8">
        <div className="space-y-8">
          <ShowCoursePage page={page} />
          <div className="join flex justify-center">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              onClick={() => {
                setPage(1);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
              onClick={() => {
                setPage(2);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
              onClick={() => {
                setPage(3);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
              onClick={() => {
                setPage(4);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="5"
              onClick={() => {
                setPage(5);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="6"
              onClick={() => {
                setPage(6);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="7"
              onClick={() => {
                setPage(7);
              }}
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="8"
              onClick={() => {
                setPage(8);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhoaHoc;
