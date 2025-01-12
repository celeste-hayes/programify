import React from 'react';

export default function ProfileCard({ profileImage, name, githubLink, email }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img
                src={profileImage}
                className="card-img-top"
                alt={`${name}'s profile`}
                style={{ objectFit: 'cover', height: '180px' }} // Optional for consistent image size
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a
                    href={githubLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Profile
                </a>
                <p className="card-text">
                    <a href={`mailto:${email}`} className="btn btn-secondary mt-2">
                        Email
                    </a>
                </p>
            </div>
        </div>
    );
}