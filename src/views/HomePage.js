// src/Views/HomePage.js
import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('HomePage component mounted or updated');
    });

    const toggleColor = () => {
        setIsBlue(!isBlue);
        setCount(prev => prev + 1);
    };

    return (
        <div className="cafe-homepage" style={{ border: '2px solid black', padding: '20px' }}>
            <h1>Välkommen till Rehabinstitutet</h1>
            <p>Din guide till bättre hälsa.
                För mer information, kontakta oss på info@rehabinstitutet.se
            </p>
            <p>Button clicks: {count}</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>
        </div>
    );
};

export default HomePage;
