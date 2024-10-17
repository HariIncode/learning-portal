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
      setCourses(data); // Assuming setCourses updates the state
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  // to add the courses
    // get courses from form
    const addCourses = async (
      cname,
      desc,
      image,
      category,
      duration,
      price,
      language,
      rating,
      reviews,
      enrolledStudents
    ) => {
      try {
        const response = await fetch(`${host}/api/add/courses`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body:JSON.stringify({
            name: cname,
            description: desc,
            image: image,
            category: category,
            language: language,
            duration: duration,
            price: price,
            rating: rating,
            numReviews: reviews,
            enrolledStudents: enrolledStudents})
        });
        const course = await response.json();
        setCourses(courses.concat(course))
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const deleteCourse = async (id) => {
      try {
        const response = await fetch(`${host}/api/add/deleteCourse/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

  return (
    <coursesContext.Provider value={{ getCourses, addCourses, deleteCourse, courses }}>
      {props.children}
    </coursesContext.Provider>
  );
};

export default CoursesState;
