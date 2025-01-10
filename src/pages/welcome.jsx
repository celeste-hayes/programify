import React from 'react';
import '../styles/welcome.css';

const Welcome = () => {
    return (




        <div className='main-border'>
            <div className='center-text'>
                <h3 className="text-black">Welcome!</h3>
                <h2 className="text-black">Let's Learn, Code and Create Together</h2>
                <p className="text-black lead fs-6 mb-4">
                    We're excited to welcome you to Programify! Our platform is designed by developers, for developers, offering a dynamic learning experience!!
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#get-started" className="btn btn-get-started btn-sm">Get Started</a>
                    <a href="#learn-more" className="btn btn-learn-more btn-sm">Learn More</a>
                </div>
            </div>
        </div>

    );
};


export default Welcome;