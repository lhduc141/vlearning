import React, { useEffect, useMemo, useState } from "react";
import AdminTop from "../../../components/App/AdminTop";
import { Button, LinearProgress } from "@mui/material";
import Search from "../../../components/App/Search";
import AdminCourseTable from "../../../components/App/AdminCourseTable";
import { courseService } from "../../../service/courseService";
import { useNavigate } from "react-router-dom";
const CourcesList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);

  const navigate = useNavigate();

  const dataReSearch = useMemo(() => {
    if (!searchQuery) return courses;

    return courses?.filter((cource) => {
      return cource?.tenKhoaHoc
        ?.toLowerCase()
        ?.includes(searchQuery?.toLowerCase());
    });
  }, [searchQuery, courses]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const { data } = await courseService.getCourses();
        setCourses(data);
        setIsLoading(false);
      } catch (error) {
        console.log("getCourses ~ error:", error);
        setIsLoading(false);
      }
    };
    getCourses();
  }, []);

  if (isLoading) return <LinearProgress color="warning" />;

  return (
    <div className="bg-neutral-50 m-3 p-5 h-screen">
      <AdminTop />

      {/* table */}
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl text-base-300 font-bold">
            Quản lý người dùng
          </h1>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/admin/courses/create")}
          >
            Thêm khóa học
          </Button>
        </div>

        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <AdminCourseTable courses={dataReSearch} setCourses={setCourses} />
      </div>
    </div>
  );
};

export default CourcesList;
