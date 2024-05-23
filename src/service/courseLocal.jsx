import { message } from "antd";

export const courseLocal = {
  setCourseList: () => {
    localStorage.setItem("courseList", JSON.stringify([]));
  },
  getCourseList: () => {
    let json = localStorage.getItem("courseList");
    if (json) {
      return JSON.parse(json);
    } else {
      return [];
    }
  },
  addCourse: (data) => {
    let json = localStorage.getItem("courseList");
    let courseList = json ? JSON.parse(json) : [];

    courseList.push(data);

    localStorage.setItem("courseList", JSON.stringify(courseList));
    message.success("Add to courseList");
  },
  deleteCourseList: () => {
    localStorage.removeItem("courseList");
  },

  setCourseDetail: () => {
    localStorage.setItem("courseDetail", JSON.stringify([]));
  },
  addDetailCourse: (data) => {
    let json = localStorage.getItem("courseDetail");
    let courseDetail = json ? JSON.parse(json) : [];

    courseDetail.push(data);

    localStorage.setItem("courseDetail", JSON.stringify(courseDetail));
  },

  setCoursePageList: () => {
    localStorage.setItem("coursePageList", JSON.stringify([]));
  },

  setCoursePageList: () => {
    localStorage.setItem("coursePageList", JSON.stringify([]));
  },
  addCoursePageList: (data) => {
    let coursePageList = localStorage.getItem("coursePageList");
    let coursePage = coursePageList ? JSON.parse(coursePageList) : [];

    coursePage.push(data);

    localStorage.setItem("courseDetail", JSON.stringify(coursePage));
  },
};
