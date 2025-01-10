import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { FaCode } from 'react-icons/fa';
import "../../styles/dashboard.css";

export default function Progress({ progress }) {
    const displayProgress = isNaN(progress) ? 0 : progress;
    
    const getMessage = () => {
        if (displayProgress === 0) return "Start Crushing It";
        if (displayProgress === 25) return "You're Getting There";
        if (displayProgress === 50) return "You've Got This";
        if (displayProgress === 75) return "Almost There";
        if (displayProgress === 100) return "Congrats. You Did It!";
        return "";
    };

    return (
        <Container className="text-center">
            <div className="mt-4 mb-5">
                <h4>{getMessage()}</h4>
            </div>
            <div className="progress-tracker" style={{ position: 'relative', width: '100%' }}>
                <ProgressBar 
                    now={displayProgress} 
                    label={`${displayProgress}%`} 
                    style={{ color: 'black', height: '20px', borderRadius: '5px' }}
                    className="goal-progress-bar"
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: `${displayProgress}%`,
                        transform: 'translateX(-50%)',
                        fontSize: '30px',
                    }}
                >
                    <FaCode />
                </div>
            </div>
        </Container>
    );
}