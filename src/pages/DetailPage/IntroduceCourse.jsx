import React from "react";

const IntroduceCourse = ({ detailCourse }) => {
  return (
    <div className="space-y-4 px-8">
      <div className="text-[2rem] text-black">
        Khóa học: <span>{detailCourse.data?.tenKhoaHoc}</span>
      </div>

      <div className="flex space-x-16">
        <div className="flex space-x-4">
          <i className="fa fa-chalkboard-teacher p-4 border rounded-full"></i>
          <div>
            <span className="text-[var(--colorTextCard)]">Giảng viên</span>
            <div className="font-semibold">
              {detailCourse.data?.nguoiTao?.hoTen}
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <i className="fa fa-graduation-cap p-4 border rounded-full"></i>
          <div>
            <span className="text-[var(--colorTextCard)]">Danh mục</span>
            <div className="font-semibold">
              {detailCourse.data?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="course-description p-6 bg-gray-100 rounded-lg shadow-md">
          <p className="mb-4">
            Khóa học của chúng tôi được thiết kế để cung cấp kiến thức và kỹ
            năng chuyên sâu trong nhiều lĩnh vực khác nhau, từ lập trình, thiết
            kế đồ họa, kinh doanh, marketing đến phát triển cá nhân. Mỗi khóa
            học đều được xây dựng bởi các chuyên gia hàng đầu với nội dung phong
            phú và cập nhật, nhằm đáp ứng nhu cầu học tập và phát triển của học
            viên.
          </p>

          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <strong>Nội dung chất lượng cao:</strong>
                <ul className="list-disc list-inside ml-5">
                  <li>
                    Các khóa học được phát triển bởi các giảng viên và chuyên
                    gia có nhiều năm kinh nghiệm trong ngành.
                  </li>
                  <li>
                    Nội dung khóa học được thiết kế kỹ lưỡng, từ cơ bản đến nâng
                    cao, giúp học viên dễ dàng tiếp cận và nắm bắt kiến thức.
                  </li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start timeline-box">
                <li>
                  <strong>Phương pháp giảng dạy đa dạng:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Sử dụng các phương pháp giảng dạy tiên tiến, bao gồm bài
                      giảng video, bài tập thực hành, bài kiểm tra, và dự án
                      thực tế.
                    </li>
                    <li>
                      Hỗ trợ tài liệu học tập chi tiết và các nguồn tài nguyên
                      bổ sung để học viên có thể học tập mọi lúc, mọi nơi.
                    </li>
                  </ul>
                </li>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <li>
                  <strong>Tương tác và hỗ trợ học viên:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Cung cấp diễn đàn thảo luận và hỗ trợ trực tuyến để học
                      viên có thể trao đổi, hỏi đáp và giải quyết các thắc mắc
                      trong quá trình học.
                    </li>
                    <li>
                      Đội ngũ hỗ trợ học viên luôn sẵn sàng giúp đỡ và hướng dẫn
                      học viên đạt được mục tiêu học tập.
                    </li>
                  </ul>
                </li>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start timeline-box">
                <li>
                  <strong>Chứng chỉ hoàn thành khóa học:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Sau khi hoàn thành khóa học, học viên sẽ nhận được chứng
                      chỉ có giá trị, giúp họ nâng cao hồ sơ cá nhân và tăng cơ
                      hội nghề nghiệp.
                    </li>
                  </ul>
                </li>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                {" "}
                <li>
                  <strong>Linh hoạt và tiện lợi:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Học viên có thể lựa chọn học trực tuyến qua nền tảng
                      e-learning, hoặc học trực tiếp tại các trung tâm đào tạo
                      của chúng tôi.
                    </li>
                    <li>
                      Các khóa học được tổ chức linh hoạt về thời gian, phù hợp
                      với lịch trình bận rộn của học viên.
                    </li>
                  </ul>
                </li>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3">
            Chúng tôi tin vào tiềm năng của con người
          </h3>
          <div>
            CyberSoft được thành lập dựa trên niềm tin rằng bất cứ ai cũng có
            thể học lập trình. Bất kể ai cũng có thể là một lập trình, tham gia
            trong đội ngữ Tech, bất kể tuổi tác, nền tảng, giới tính hoặc tình
            trạng tài chính. Chúng tôi không bỏ qua những người mới bắt đầu hoặc
            chưa có kinh nghiệm theo đuổi đam mê lập trình. Thay vào đó, chúng
            tôi chào đón học viên của tất cả các cấp độ kinh nghiệm. Lộ trình
            học tập của CyberSoft may đo cho từng đối tượng để học xong và đi
            làm ngay.
          </div>

          <p className="mt-4">
            Với các khóa học đa dạng và phong phú, chúng tôi cam kết mang lại
            trải nghiệm học tập tốt nhất, giúp học viên phát triển toàn diện và
            đạt được thành công trong sự nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroduceCourse;
