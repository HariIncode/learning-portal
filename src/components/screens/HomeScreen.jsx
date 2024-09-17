import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating";

function HomeScreen({ course }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/course/${course.id}`}>
          <Card.Img src={course.image}></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/course/${course.id}`} style={{ textDecoration: "none" }}>
            <Card.Title as="h5">
              <b>{course.name}</b>
            </Card.Title>
          </Link>

          <Card.Text as="h5">{course.price}</Card.Text>

          <Card.Text as="div">
            <div className="my-1">{course.rating}</div>
          </Card.Text>

          <Rating
            value={course.rating}
            text={`${course.numReviews} reviews`}
            color={"#f8e825"}
          />

        </Card.Body>
      </Card>
    </>
  );
}

export default HomeScreen;
