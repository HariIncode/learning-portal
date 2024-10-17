import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import FormContainer from "../FormContainer";
import Message from "../Message";

function Signup() {

  let navigate = useNavigate();
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cPwd, setCpwd] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (pwd !== cPwd) {
      setMessage("Passwords do not match.");
      setVariant("danger");
    } else if (mobile.length !== 10) {
      setMessage("Please enter a valid mobile number.");
      setVariant("danger");
    } else if (pwd.length < 6) {
      setMessage("Password length should be at least 6 characters.");
      setVariant("danger");
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fname + " " + lname,
            email: email,
            password: pwd,
            mobile: mobile,
          }),
        });

        const json = await response.json();
        if (!json.success) {
          setMessage(json.error);
        } else {
          localStorage.setItem("token", json.authToken);
          localStorage.setItem("name", json.name);
          localStorage.setItem("success", json.success);
          localStorage.setItem("isAdmin", json.isAdmin);
          setMessage("User created successfully.");
          setVariant("success");
          navigate("/login");

          // Reset form fields after success
          setFname("");
          setLname("");
          setEmail("");
          setPwd("");
          setCpwd("");
          setMobile("");
        }
      } catch (error) {
        setMessage("An error occurred. Please try again.");
        setVariant("danger");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <br />
          <h1 className="text-center">Sign Up</h1>

          {message && <Message variant={variant}>{message}</Message>}

          <Form.Group controlId="firstName">
            <Form.Label>
              <i className="fa-solid fa-user"></i> First Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>
              <i className="fa-solid fa-user"></i> Last Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>
              <i className="fa-solid fa-envelope"></i> Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>
              <i className="fa-solid fa-lock"></i> Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>
              <i className="fa-solid fa-lock"></i> Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={cPwd}
              onChange={(e) => setCpwd(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label>
              <i className="fa-solid fa-mobile"></i> Mobile Number
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Button className="mt-3" type="submit" variant="success">
            Sign Up
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default Signup;
