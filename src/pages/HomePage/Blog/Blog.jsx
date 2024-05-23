import React from "react";
import Content from "./Content";

const blogs = [
  {
    title: "Tech-Enhanced Education: The Future of Learning",
    date: "2024-05-20",
    content:
      "Welcome to the first blog post on IT and e-learning. Here, we discuss the impact of technology on modern education and how online platforms are revolutionizing learning.",
  },
  {
    title: "Top E-Learning Tools Transforming Education",
    date: "2024-05-21",
    content:
      "In this second entry, we explore various e-learning tools and software that are enhancing the educational experience for both teachers and students.",
  },
  {
    title: "Cloud Computing in E-Learning: Flexibility and Scalability",
    date: "2024-05-22",
    content:
      "This third blog post delves into the benefits of cloud computing in e-learning, offering a flexible and scalable solution for educational institutions.",
  },
  {
    title: "AI in Education: Personalizing the Learning Experience",
    date: "2024-05-23",
    content:
      "The fourth post covers the rise of artificial intelligence in education, focusing on how AI-driven tools are personalizing learning and improving student outcomes.",
  },
  {
    title: "Cybersecurity Essentials for E-Learning Platforms",
    date: "2024-05-24",
    content:
      "In the fifth blog entry, we discuss the importance of cybersecurity in e-learning, providing tips on how to protect sensitive educational data.",
  },
  {
    title: "Mobile Learning: Accessibility in the Palm of Your Hand",
    date: "2024-05-25",
    content:
      "This sixth post highlights the role of mobile learning in education, examining how smartphones and tablets are making learning more accessible.",
  },
  {
    title: "Virtual Reality: Immersive Experiences in E-Learning",
    date: "2024-05-26",
    content:
      "The seventh blog post focuses on the future of virtual reality in e-learning, exploring how VR is creating immersive educational experiences.",
  },
  {
    title: "E-Learning in Rural Areas: Bridging the Digital Divide",
    date: "2024-05-27",
    content:
      "In the eighth entry, we look at the challenges and opportunities of implementing e-learning in rural and underserved areas.",
  },
  {
    title: "Gamification in E-Learning: Engaging and Motivating Students",
    date: "2024-05-27",
    content:
      "The ninth blog post discusses the role of gamification in e-learning, highlighting how game-based learning can enhance student engagement and motivation.",
  },
];

const Blog = () => {
  return (
    <div className="flex">
      <div
        className="px-12 py-12 grid grid-cols-3 gap-4 w-[70%]
    "
      >
        {blogs.map((item) => {
          return (
            <div className="p-4 border border-[#8c8c8c] rounded-xl space-y-4">
              <span className="text-[#f6ba35] text-[1.3rem] font-semibold">
                {item.title}
              </span>
              <div className="flex justify-between ">
                <div className="flex space-x-8 text-[#41b294]">
                  <div className="flex align-middle text-[1.2rem] space-x-2">
                    <i className="fa fa-thumbs-up mt-1"></i>
                    <span className="text-black">300</span>
                  </div>
                  <div className="flex align-middle text-[1.2rem] space-x-2">
                    <i className="fa fa-comment mt-1"></i>
                    <span className="text-black">1200</span>
                  </div>
                  <div className="flex align-middle text-[1.2rem] space-x-2">
                    <i className="fa fa-eye mt-1"></i>
                    <span className="text-black">3214</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between opacity-70">
                <div>Đăng bởi: John Doe</div>
                <div>{item.date}</div>
              </div>

              <div className="text-[black]">{item.content}</div>
            </div>
          );
        })}
      </div>

      <div className="w-[30%] py-12 px-4">
        <Content />
      </div>
    </div>
  );
};

export default Blog;
