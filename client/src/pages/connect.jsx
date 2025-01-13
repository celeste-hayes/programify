// Import React
import React from "react";

// Import the ProfileCard component
import ProfileCard from "../components/ProfileCard";

// Import images or other assets
import cherieImage from "../assets/cherie.jpg";
import celesteImage from "../assets/celeste.png";
import nataliImage from "../assets/Natali.jpeg";
import rileyImage from "../assets/riley.jpg";

import "../styles/connect.css";

// Profiles data
const profiles = [
    {
        profileImage: cherieImage,
        name: "Cherie Davis",
        githubLink: "https://github.com/cdavis126",
        email: "CherieADavis@gmail.com",
    },
    {
        profileImage: celesteImage,
        name: "Celeste Hayes",
        githubLink: "https://github.com/celeste-hayes",
        email: "celeste.hayes@example.com",
    },
    {
        profileImage: nataliImage,
        name: "Natali Di Bartolo",
        githubLink: "https://github.com/NataliDiB88",
        email: "Natali.di.bartolo@gmail.com",
    },
    {
        profileImage: rileyImage,
        name: "Riley Kerr",
        githubLink: "https://github.com/RyDeveloper13",
        email: "rileykerr635@gmail.com",
    },
];

// Main Connect component
export default function Connect() {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Connect with Us</h1>
            </header>
            <div className="card-container">
                {profiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        profileImage={profile.profileImage}
                        name={profile.name}
                        githubLink={profile.githubLink}
                        email={profile.email}
                    />
                ))}
            </div>
        </div>
    );
}
