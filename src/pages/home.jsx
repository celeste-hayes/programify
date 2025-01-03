import React, { useState } from "react";
import './home.css';
import axios from '../api/axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/signup", { email, password });
            // Store JWT token in local storage
            localStorage.setItem("token", response.data.token);
            // Redirect or show a success message
            console.log("Sign up successful!");
        } catch (error) {
            if (error.response) {
                console.error("Error signing up:", error.response.data);
            } else if (error.request) {
                console.error("Error signing up:", error.request);
            } else {
                console.error("Error signing up:", error.message);
            }
        }
    };

    return (
        <div className="centered-form">
            <Form className="form-container" onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </Form.Group>
                <Button type="submit" variant="primary">Sign Up</Button>
            </Form>
        </div>
    );
};

export default SignUp;
