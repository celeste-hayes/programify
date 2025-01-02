import React, { useState } from "react";
import './home.css';
import axios from '../api/axios';


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
        <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
