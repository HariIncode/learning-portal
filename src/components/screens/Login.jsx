import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import FormContainer from "../FormContainer";
import Message from "../Message";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");

  const submitHandler = async(e) => {
    e.preventDefault();

    try{
      // fetch the api and pass the values to it
      const response = await fetch("http://localhost:5000/api/auth/loginUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: pwd})
      });
      // wait for the respose and validate it

      const json = await response.json();

      if(json.success){
        localStorage.setItem('token', json.authToken);
        localStorage.setItem('name', json.name);
        localStorage.setItem('success', json.success);
        setMessage("Login Success");
        setVariant("success");
        navigate("/");
      } else{
        console.log(json)
        setMessage(json.error);
        console.log(json.error);
        setVariant("danger");
      }
    } catch(error){
        setMessage(message);
    }
    // setMessage(`${email}, ${pwd}`);
    // setVariant("success");
    // setEmail("");
    // setPwd("");
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
