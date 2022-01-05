import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "../components/users.json";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const navigate = useNavigate();

  const nyoba = () => {
    const user = users.find(
      (e) => e.username == username && e.password == password
    );
    if (!user) {
      return alert("Username/Password Salah");
    } else {
      navigate("/");
    }
  };

  console.log(username);
  console.log(password);
  return (
    <section className="Background-requirements">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 fw-bold" style={{ width: "350px" }}>
          <h4
            className="mb-5 text-center"
            style={{ fontFamily: "Open Sans Bold" }}
          >
            LOGIN
          </h4>
          <Form onSubmit={nyoba}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="input-style"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Insert your username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="input-style"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                placeholder="Insert your password"
              />
            </Form.Group>
            <Button
              className="w-100 text-light py-3 mb-3"
              variant="warning"
              type="submit"
              style={{ fontFamily: "Open Sans Bold", fontSize: "12px" }}
            >
              LOGIN
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
