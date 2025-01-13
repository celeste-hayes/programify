import React from 'react';
import '../styles/welcome.css';
import LoginSignup from '../components/LoginSignup';


const Welcome = () => {


    return (
        <div>
            <div className="welcome-page-wrapper">
                <div className="welcome-page-container">
                    <div>
                        <img src="/src/assets/Programify2.svg" alt="Programify Logo" className="img-fluid" />
                    </div>
                    <LoginSignup />
                </div>
            </div>
        </div>
    );
};


export default Welcome;