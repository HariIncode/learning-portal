import React,{ useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import Courses from "../Courses";
import HomeScreen from "./screens/HomeScreen";
import coursesContext from "./context/coursesContext";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const { getCourses, courses } = context;
  useEffect(() => {
    if(localStorage.getItem("token")){
      getCourses();
    }else{
      navigate("/login");
    }
  },[]);
  console.log("Courses-->",courses);
  // console.log(courses.image);
  console.log("First Course Image:", courses[0]?._id); // Safely access the first course's image

  

  return (
    <>
      <h1 className="text-center m-3">Welcome to Courses</h1>
      <hr />
      <Row>
        {courses.map((course) => (
          // <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
          <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h2>{course.name}</h2> */}
            <HomeScreen course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
