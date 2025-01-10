import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import placeholderImage from '../assets/PlaceholderImage.jpg';

export default function CardSlider() {
    const data = [
        {
            featured: 1,
            image: '', 
            name: 'Jennifer',
            description: 'This is the description for card 1.',
        },
        {
            featured: 2,
            image: '', 
            name: 'Michael',
            description: 'This is the description for card 2.',
        },
        {
            featured: 3,
            image: '', 
            name: 'Sarah',
            description: 'This is the description for card 3.',
        },
    ];

    return (
        <div className="w-75 m-auto mt-5">
            <Carousel 
                nextIcon={<FaChevronRight size={30} color="#2575fc" />}
                prevIcon={<FaChevronLeft size={30} color="#2575fc" />}
                controls={true}
            >
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Card 
                            className="text-center bg-white text-dark rounded-3 shadow-lg"
                            style={{
                                border: 'none',
                            }}
                        >
                            <Card.Img 
                                variant="top" 
                                src={item.image || placeholderImage} 
                                className="w-60 mx-auto rounded-top" 
                                alt={item.name} 
                                style={{ height: '500px', objectFit: 'cover' }}
                            />
                            <Card.Body 
                                className="d-flex flex-column justify-content-center align-items-center p-5"
                                style={{
                                    background: 'linear-gradient(45deg, rgba(37, 117, 252, 0.6), rgba(106, 17, 203, 0.6), rgba(242, 175, 41, 0.6))', // Your specified gradient
                                }}
                            >
                                <Card.Title className="fs-2 fw-bold mb-4">{item.name}</Card.Title>
                                <Card.Text className="text-center fs-5 mb-4">{item.description}</Card.Text>
                                <Button 
                                    variant="primary" 
                                    className="px-3 py-2 rounded-3" 
                                    style={{
                                        backgroundColor: '#2575fc',
                                        borderColor: '#2575fc',
                                    }}
                                >
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}










