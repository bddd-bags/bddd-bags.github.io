import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <section className="Background-requirements">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 fw-bold" style={{ width: "350px" }}>
          <h4
            className="mb-5 text-center fw-bold"
            style={{ fontFamily: "Open Sans Bold" }}
          >
            REGISTER
          </h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                className="input-style"
                placeholder="Insert your username"
                onChange={(e) => setUsername(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required
                type="password"
                className="input-style"
                placeholder="Insert your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                required
                type="password"
                className="input-style"
                placeholder="Confirm your password"
              />
            </Form.Group>
            <Button
              className="w-100 text-light py-3 mb-3"
              variant="warning"
              type="submit"
              style={{ fontFamily: "Open Sans Bold", fontSize: "12px" }}
            >
              REGISTER
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
