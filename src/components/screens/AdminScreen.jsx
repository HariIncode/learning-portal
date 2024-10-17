import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Table,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import coursesContext from "../context/coursesContext";
import Message from "../Message";

function AdminScreen() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const { addCourses, getCourses, deleteCourse, courses } = context;

  useEffect(() => {
    if(localStorage.getItem("token")){
      getCourses();
      console.log(courses);
    }else{
      navigate("/login");
    }
  },[]);

  const [cname, setCname] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [enrolledStudents, setEnrolledStudents] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    addCourses(cname,
        desc,
        image,
        category,
        duration,
        price,
        language,
        rating,
        reviews,
        enrolledStudents);
        setMessage("Course is Added");

        setCname("");
        setDesc("");
        setImage("");
        setCategory("");
        setDuration("");
        setPrice("");
        setLanguage("");
        setRating("");
        setReviews("");
        setEnrolledStudents("");

  };

  const handleDelete=(e)=>{
    // e.preventDefault();
    deleteCourse(e._id)
  }

  return (
    <>
      <Container>
        <br />
      </Container>
      <Row>
        <Col md={3}>
          <Link to="/" className="btn btn-dark my-3">
            Go Back
          </Link>
          <Form responsive="sm" onSubmit={handleClick}>
            <br />
            <h1 className="text-center">Add Courses</h1>
            {message && (
              <Message variant="success" children={message}>
              </Message>
            )}

            <FormGroup controlId="cname">
              <FormLabel>
                <i className="fa-solid fa-code fa-beat"></i>
                Course Name
              </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter your Course Name"
                value={cname}
                onChange={(e) => setCname(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="description">
              <FormLabel>
                <i className="fa-solid fa-audio-description fa-beat-fade"></i>
                Description
              </FormLabel>
              <FormControl
                as="textarea"
                rows={3}
                type="text"
                placeholder="Enter Course Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="image">
              <FormLabel>
                <i className="fa-sharp fa-solid fa-image"></i>
                Image Url
              </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="category">
              <FormLabel>
                <i className="fa-solid fa-cart-shopping "></i>
                Category
              </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Course Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="duration">
              <FormLabel>
                <i className="fa-solid fa-timer fa-spin fa-spin-reverse"></i>
                Duration
              </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter Course Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="price">
              <FormLabel>
                <i className="fa-sharp fa-solid fa-tag fa-bounce"></i>
                Price
              </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter Course Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="language">
              <FormLabel>
                <i className="fa-solid fa-language fa-beat-fade"></i>
                Language
              </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Course Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="rating">
              <FormLabel>
                <i className="fa-solid fa-star fa-flip"></i>
                Rating
              </FormLabel>
              <FormSelect
                aria-label="Default select example"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </FormSelect>
            </FormGroup>

            <FormGroup controlId="reviews">
              <FormLabel>
                <i className="fa-solid fa-user-magniffying-glass fa-beat-fade"></i>
                Reviews
              </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter number of Reviews"
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="enrolledStudents">
              <FormLabel>
                <i className="fa-solid fa-building-columns"></i>
                Enrolled Students
              </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter number of enrollment"
                value={enrolledStudents}
                onChange={(e) => setEnrolledStudents(e.target.value)}
                required
              ></FormControl>
            </FormGroup>

            <Button
              className="mt-3"
              type="submit"
              variant="success"
            //   onClick={handleClick}
            >
              {" "}
              Add Courses
            </Button>
          </Form>{" "}
        </Col>
        <Col md={9}>
          {" "}
          <h3 className="bg-success text-white text-center rounded">
            Admin Panel
          </h3>
          <h3 className="text-center bg-light">Courses</h3>
          <Table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Language</th>
                <th>Ratings</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course)=>(
                <tr>
                  <td>{course.name}</td>
                  <td><img src={course.image} alt="" width="120px" /></td>
                  <td>{course.description}</td>
                  <td>{course.price}</td>
                  <td>{course.category}</td>
                  <td>{course.duration}</td>
                  <td>{course.language}</td>
                  <td>{course.rating}</td>
                  <td><Button variant="danger" className="btn btn-block sm" onClick={handleDelete(course._id)}>Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default AdminScreen;
