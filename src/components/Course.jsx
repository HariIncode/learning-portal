import React from 'react';
import { Container, Row, Button, ListGroup, Image, Col, ListGroupItem, Card } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import Rating from './Rating';
import Courses from '../Courses';

function Course() {
  const { id } = useParams();
  const course = Courses.find((c) => c.id === Number(id));
  console.log(course.image)
  return (
    <>
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
            <ListGroupItem><Rating value={course.rating} text={`${course.numReviews} reviews`} color={"#f8e825"}/></ListGroupItem>
            <ListGroupItem>
              <h3>Price: {course.price} </h3>
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
    </>
  )
}

export default Course

// import React from 'react';
// import { Card, Row, Button, ListGroup, Image, Col } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import Rating from './Rating';
// import Courses from '../Courses';

// function Course() {
//   const { id } = useParams(); // Destructure id from useParams
//   const course = Courses.find((c) => c.id === Number(id)); // Convert id to a number for comparison

//   // Log to debug
//   console.log('Course ID:', id);
//   console.log('Course found:', course);

//   if (!course) {
//     return <h2>Course not found</h2>; // Render message if course is not found
//   }

//   return (
//     <>
//       <Link to='/' className='btn btn-dark my-3'>
//         Go Back
//       </Link>
//       <Row>
//         <Col md={6}>
//           <Image src={course.image} alt={course.name} fluid />
//         </Col>
//         <Col md={6}>
//           <ListGroup variant="flush">
//             <ListGroupItem>
//               <h3>{course.name}</h3>
//             </ListGroupItem>
//             <ListGroupItem>
//               <Rating value={course.rating} text={`${course.numReviews} reviews`} />
//             </ListGroupItem>
//             <ListGroupItem>Price: ${course.price}</ListGroupItem>
//             <ListGroupItem>Description: {course.description}</ListGroupItem>
//           </ListGroup>
//           <Button className='btn-block' type='button' disabled={course.enrolledStudents === 0}>
//             {course.enrolledStudents > 0 ? 'Enroll Now' : 'Out of Stock'}
//           </Button>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default Course;
