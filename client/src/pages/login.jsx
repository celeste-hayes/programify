import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import '../styles/home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [loginData, setLoginData] = useState({ 
        email: '', 
        password: '' 
    });

    const navigate = useNavigate();

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
        }
    };

    return (
        <div className='centered-form fade-in'>
            <Form className="form-container" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Button type="submit" variant="primary">Login</Button>
                <div className="login-link">
                    <p>Don't have an account? 
                        <Button variant="link" onClick={() => navigate('/signup')}>Sign Up</Button>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default Login;
