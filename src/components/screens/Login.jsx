import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../FormContainer";
import Message from "../Message";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(`${email}, ${pwd}`);
    setVariant("success");
    setEmail("");
    setPwd("");
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <br />
          <h1 className="text-center">Login</h1>

          {message && <Message variant={variant} children={message} />}

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
            <Form.Label><i class="fa-solid fa-key"></i> Password</Form.Label>
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

          <Button className="mt-3" type="submit" variant="success">
            Login
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default Login;
