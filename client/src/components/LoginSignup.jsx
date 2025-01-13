import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import '../styles/LoginSignup.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

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

            const response = await fetch("http://localhost:3001/api/auth/signup", requestOptions);

            if (!response.ok) {
                const errorData = await response.text();
                console.error('Signup failed:', errorData);
                throw new Error(errorData || "An error occurred during signup.");
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.token) {
                console.log('Signup successful, token:', data.token); // Log token to the console
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            Auth.login(data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error('Failed to login', err);
            setErrorMessage("Login failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h2 className="text">{action}</h2> {/* Dynamic header */}
                <div className="underline"></div>
            </div>

            {action === "Sign Up" ? (
                <Form className="form-container" onSubmit={handleSignUp}>
                    <div className="inputs">
                        <div className="input">
                            <FaUserCircle className="icon" />
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input">
                            <FaUserCircle className="icon" />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input">
                            <MdOutlineAlternateEmail className="icon" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input">
                            <RiLockPasswordLine className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="submit-container">
                        {/* Toggle between Sign Up and Login */}
                        <Button
                            className={action === "Login" ? "submit gray" : "submit"}
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing Up..." : "Sign Up"}
                        </Button>
                        <Button
                            className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={() => setAction("Login")}
                            disabled={isSubmitting}
                        >
                            Login
                        </Button>
                    </div>

                    {/* Display Error Message */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </Form>
            ) : (
                <Form className="form-container" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input">
                            <MdOutlineAlternateEmail className="icon" />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input">
                            <RiLockPasswordLine className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="submit-container">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Logging In..." : "Login"}
                        </Button>
                    </div>

                    {/* Display Error Message */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </Form>
            )}


        </div>
    );
};

export default LoginSignup;
