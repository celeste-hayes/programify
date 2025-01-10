import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../styles/home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            //const response = await axios.post("/api/signup", { email, password });
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({ email, password }),
                redirect: "follow"
            };

            console.log("Sending API request with:", requestOptions);

            const request = await fetch("/api/signup", requestOptions)
            console.log("Request Completed awaiting response...");
            const data = await request.json()
            console.log('Api response', data);

            if (data.token) {
                navigate('/welcome');
            }




        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className="centered-form fade-in">
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
                <div className="login-link">
                    <p>Already have an account? <Button variant="link" onClick={() => navigate('/login')}>Login</Button></p>
                </div>
            </Form>

        </div>
    );
};

export default SignUp;
