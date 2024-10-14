import React, { useState, useEffect } from "react";
import coursesContext from "./coursesContext";

const CoursesState = (props) => {
  const host = "http://localhost:5000";
  const coursesInital = [];
  const [courses, setCourses] = useState(coursesInital);

  const getCourses = async () => {
    try {
      const response = await fetch(`${host}/api/add/fetchAllCourses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log("Fetched Courses:", data); // Log fetched data
      setCourses(data); // Assuming setCourses updates the state
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <coursesContext.Provider value={{ getCourses, courses }}>
      {props.children}
    </coursesContext.Provider>
  );
};

export default CoursesState;
