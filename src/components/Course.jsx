import React, { useContext, useEffect } from 'react';
import { Container, Row, Button, ListGroup, Image, Col, ListGroupItem, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from './Rating';
import coursesContext from "./context/coursesContext";
import { useNavigate } from 'react-router-dom';

function Course() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const { getCourses, courses } = context;

  useEffect(() => {
    const checkTokenAndFetchCourses = async () => {
      if (localStorage.getItem("token")) {
        await getCourses();
      } else {
        navigate("/login");
      }
    };

    checkTokenAndFetchCourses();
  }, []);

  const { id } = useParams(); // Ensure that you're getting the correct id from params
  console.log(id);
  
  const course = courses.find((c) => c._id === id); // Use _id for comparison

  if (!course) {
    return <h2>Course not found</h2>; // Handle course not found scenario
  }

  return (
    <Container>
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image className='rounded' src={course.image} alt={course.name} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant='flush'>
            <ListGroupItem><h3>{course.name}</h3></ListGroupItem>
            <ListGroupItem><Rating value={course.rating} text={`${course.numReviews} reviews`} color={"#f8e825"} /></ListGroupItem>
            <ListGroupItem>
              <h3>Price: {course.price}</h3>
            </ListGroupItem>
            <ListGroupItem as='p'>
              {course.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h6>Duration: {course.duration}</h6>
              </ListGroupItem>
              <ListGroupItem>
                <h6>Language: {course.language}</h6>
              </ListGroupItem>
              <ListGroupItem>
                <h6>Category: {course.category}</h6>
              </ListGroupItem>
              <ListGroupItem>
                <h6>Enrolled Candidates: {course.enrolledStudents}</h6>
              </ListGroupItem>
              <Button className='btn-block btn-success'>Enroll Now</Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Course;
