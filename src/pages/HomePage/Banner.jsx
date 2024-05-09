import React, { useEffect, useState } from "react";

const Banner = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 400) {
        setCount1((prevCount) => prevCount + 1);
        setCount2((prevCount) => prevCount + 1);
        setCount3((prevCount) => prevCount + 1);
        setCount4((prevCount) => prevCount + 1);
      } else if (count1 === 400) {
        setCount1(9000);
        setCount2(1000);
        setCount3(33200);
        setCount4(400);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count1]);
  return (
    <div
      style={{ background: "#F0F8FF" }}
      className="w-full flex flex-row justify-around items-center py-10 flex-wrap gap-5"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
          alt="1"
          className="w-20"
        />
        <h1 className="font-bold text-[50px] text-[#41B294]">{count1}</h1>
        <b className="text-black">Học viên</b>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
          alt="1"
          className="w-20"
        />
        <h1 className="font-bold text-[50px] text-[#41B294]">{count2}</h1>
        <b className="text-black">Khóa học</b>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
          alt="1"
          className="w-20"
        />
        <h1 className="font-bold text-[50px] text-[#41B294]">{count3}</h1>
        <b className="text-black">Giờ học</b>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
          alt="1"
          className="w-20"
        />
        <h1 className="font-bold text-[50px] text-[#41B294]">{count4}</h1>
        <b className="text-black">Giảng viên</b>
      </div>
    </div>
  );
};

export default Banner;
