import React from "react";

const FeedBack = () => {
  return (
    <div className="flex flex-row justify-center p-5 h-[400px] gap-5 md:gap-10 md:max-w-[1000px] mx-auto">
      <img
        style={{
          background: "pink",
          borderRadius: "5px 50% 50% 50%",
          objectFit: "cover",
        }}
        className="w-[100px] h-[100px] md:w-[200px] xl:w-[300px] md:h-[200px] xl:h-[300px] m-5"
        src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
        alt="center"
      />

      <p className="text-neutral-900">
        Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình
        từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh
        chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng
        viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
        <p style={{ color: "pink" }}>Nhi Dev</p>
        Học viên xuất sắc
      </p>
    </div>
  );
};

export default FeedBack;
