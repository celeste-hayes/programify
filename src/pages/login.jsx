import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({ email, password }),
                redirect: "follow"
            };
            console.log("Sending API request with:", requestOptions);

            const request = await fetch("http://localhost:5175/api/login", requestOptions);
            console.log("Request completed awaiting response...");

            if (!request.headers.get('content-type')?.includes('application/json')) {
                throw new Error("Server did not return JSON. Received: " + await request.text());
            }

            const data = await request.json();
            console.log('Api response', data);

            if (data.token) {
                navigate('/dashboard');
            } else {
                console.log('Login was not successful:', data);
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className='centered-form fade-in'>
            <Form className="form-container" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </Form.Group>
                <Button type="submit" variant="primary">Login</Button>
                <div className="login-link">
                    <p>Don't have an account? <Button variant="link" onClick={() => navigate('/')}>Sign Up</Button></p>
                </div>
            </Form>
        </div>
    );
};

export default Login;
