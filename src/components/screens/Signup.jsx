import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../FormContainer";
import Message from "../Message";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cPwd, setCpwd] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(`${fname}, ${lname}, ${email}, ${pwd}, ${cPwd}, ${mobile}`);

    if (pwd != cPwd) {
      setMessage("password error");
      setVariant("danger");
    } else if (mobile.length != 10) {
      setMessage("Mobile num error");
      setVariant("danger");
    } else {
      setMessage("Success");
      setVariant("success");
      setFname("");
      setLname("");
      setEmail("");
      setPwd("");
      setCpwd("");
      setMobile("");
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <br />
          <h1 className="text-center">Sign Up</h1>

          {message && <Message variant={variant} children={message} />}

          <Form.Group controlId="firstName">
            <Form.Label><i class="fa-solid fa-user"></i> First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter FirstName"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label><i class="fa-solid fa-user"></i> Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LastName"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label><i class="fa-solid fa-envelope"></i> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label><i class="fa-solid fa-lock"></i> Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirm password">
            <Form.Label><i class="fa-solid fa-lock"></i> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={cPwd}
              onChange={(e) => {
                setCpwd(e.target.value);
              }}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label><i class="fa-solid fa-mobile"></i> Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
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
