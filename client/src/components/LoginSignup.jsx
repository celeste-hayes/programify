import React, { useState, useEffect } from 'react';
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
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        if (action === "Sign Up") {
            return formData.email && formData.password && formData.firstName && formData.lastName;
        }
        return formData.email && formData.password;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                }),
            };

            const response = await fetch("http://localhost:3001/api/auth/signup", requestOptions);
            console.log('Response status:', response.status);
            const responseData = await response.json();
            console.log('Response data:', responseData);

            if (!response.ok) {
                throw new Error(responseData.message || "An error occurred during signup.");
            }

            if (responseData.token) {
                localStorage.setItem("authToken", responseData.token);
                console.log('Token:', responseData.token);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const data = await login({ email: formData.email, password: formData.password });
            console.log('Login response data:', data);

            if (data.token) {
                Auth.login(data.token);
                localStorage.setItem("authToken", data.token);
                console.log('Logged in, token:', data.token);
                navigate('/dashboard');
            } else {
                setErrorMessage("Login failed. Please try again.");
            }
        } catch (err) {
            console.error('Failed to login', err);
            setErrorMessage("Login failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (action === "Sign Up") {
            setFormData({ email: '', password: '', firstName: '', lastName: '' });
            setErrorMessage("");
        } else {
            setFormData({ email: '', password: '' });
            setErrorMessage("");
        }
    }, [action]);

    return (
        <div className="login-container">
            <div className="login-header">
                <h2 className="text">{action}</h2>
                <div className="underline"></div>
            </div>

            <Form className="form-container" onSubmit={action === "Sign Up" ? handleSignUp : handleSubmit}>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <>
                            <div className="input">
                                <FaUserCircle className="icon" />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName || ''}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input">
                                <FaUserCircle className="icon" />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName || ''}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="input">
                        <MdOutlineAlternateEmail className="icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <RiLockPasswordLine className="icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="submit-container">
                    <Button
                        className={
                            isFormValid() ? "submit submit-active" : "submit gray"
                        }
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting || !isFormValid()}
                    >
                        {isSubmitting ? (action === "Sign Up" ? "Signing Up..." : "Logging In...") : action}
                    </Button>

                    {/* Toggle Button */}
                    <Button
                        className={action === "Sign Up" ? "submit toggle-button" : "submit toggle-button"}
                        onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
                        disabled={isSubmitting}
                    >
                        {action === "Sign Up" ? "Login" : "Sign Up"}
                    </Button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </Form>
        </div>
    );
};

export default LoginSignup;


