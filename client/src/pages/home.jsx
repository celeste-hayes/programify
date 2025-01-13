import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, firstName, lastName }),
            };

            console.log('Sending request:', requestOptions);

            // Send the request to the backend API
            const response = await fetch("http://localhost:3001/api/auth/signup", requestOptions);

            // Check if the response is successful (status code 2xx)
            if (!response.ok) {
                const errorData = await response.text();
                console.error('Signup failed:', errorData);
                throw new Error(errorData || "An error occurred during signup.");
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.token) {
                // If the signup is successful, navigate to the dashboard
                localStorage.setItem("authToken", data.token);
                navigate('/dashboard');
            } else {
                setErrorMessage("Signup failed. Please try again.");
            }

        } catch (error) {
            console.error("Error signing up:", error);
            setErrorMessage(error.message || "An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="centered-form fade-in">
            <Form className="form-container" onSubmit={handleSignUp}>
                {/* First Name */}
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} // Update state on change
                        required
                    />
                </Form.Group>

                {/* Last Name */}
                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} // Update state on change
                        required
                    />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        required
                    />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? "Signing Up..." : "Sign Up"}
                </Button>

                {/* Link to Login */}
                <div className="login-link">
                    <p>Already have an account?
                        <Button variant="link" onClick={() => navigate('/login')}>Login</Button>
                    </p>
                </div>

                {/* Display Error Message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </Form>
        </div>
    );
};

export default SignUp;
