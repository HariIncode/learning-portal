import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Courses from '../Courses'
import HomeScreen from './screens/HomeScreen'
function Home() {
  return (
    <>
        <h1 className='text-center m-3'>Welcome to Courses</h1>
        <hr />
        <Row>
          {Courses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              {/* <h2>{course.name}</h2> */}
              <HomeScreen  course={course} />

            </Col>
          ))}
        </Row>
    </>
  )
}

export default Home