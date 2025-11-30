import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Requiem</h1>
        <p>The best place to find and share software requirements.</p>
        <Link to="/register" className="btn btn-primary">Get Started</Link>
      </header>
    </div>
  );
};

export default Home;
