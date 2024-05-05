import React from "react";

const HomeIntro = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4">
                        <div className="h-full p-8 rounded bg-green-500 text-white">
                            <h3 className="text-2xl font-bold mb-4">KHOÁ HỌC</h3>
                            <p className="mb-4">
                                <span className="font-bold">Học qua dự án thực tế</span>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay
                            </p>
                            <ul>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span >Hơn 1000 bài tập và dự án thực tế</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Công nghệ cập nhật mới nhất</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Tư duy phân tích, giải quyết vấn đề trong dự án</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 md:col-span-1">
                        <div className="h-full p-8 rounded bg-orange-500 text-white">
                            <h3 className="text-2xl font-bold mb-4">LỘ TRÌNH PHÙ HỢP</h3>
                            <ul>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 md:col-span-1">
                        <div className="h-full p-8 rounded bg-orange-500 text-white">
                            <h3 className="text-2xl font-bold mb-4">GIẢNG VIÊN</h3>
                            <ul>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Tương tác cùng mentor và giảng viên qua phần thảo luận</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Review code và đưa ra các nhận xét góp ý</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Chấm điểm tương tác thảo luận giữa các học viên</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 md:col-span-1">
                        <div className="h-full p-8 rounded bg-gray-700 text-white">
                            <h3 className="text-2xl font-bold mb-4">HỆ THỐNG HỌC TẬP</h3>
                            <ul>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 md:col-span-1">
                        <div className="h-full p-8 rounded bg-gray-700 text-white">
                            <h3 className="text-2xl font-bold mb-4">CHỨNG NHẬN</h3>
                            <ul>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Chấm bài và có thể vấn đáp trực tuyến để review</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span></li>
                                <li><i className="fas fa-check" style={{ paddingRight: '10px' }}></i><span>Kết nối CV của bạn đến với các đối tác của Edumall</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
git