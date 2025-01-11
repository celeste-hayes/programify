import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../styles/home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Add state for error message
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");  // Reset error message before each request
    
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, firstName, lastName }),
            };
    
            console.log("Sending API request with:", requestOptions);
    
            // Send the request to the backend API
            const response = await fetch("/api/signup", requestOptions);
    
            // Check if the response is successful (status code 2xx)
            if (!response.ok) {
                const errorData = await response.text();  // Get raw text to check error content
                throw new Error(errorData || "An error occurred during signup.");
            }
    
            console.log("Request completed, awaiting response...");
            const data = await response.json();  // Parse the response as JSON
            console.log("API response:", data);
    
            if (data.token) {
                // If the signup is successful, navigate to the dashboard
                navigate('/dashboard');
            } else {
                setErrorMessage("Signup failed. Please try again.");
            }
    
        } catch (error) {
            // Handle any errors from the fetch request or response
            console.error("Error signing up:", error);
            setErrorMessage(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="centered-form fade-in">
            <Form className="form-container" onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required />
                </Form.Group>
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
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
            </Form>
        </div>
    );
};

export default SignUp;