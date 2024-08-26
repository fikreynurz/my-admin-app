import React from 'react';
import Navbar from '../components/Navbar'

function WelcomePage() {
  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <h2>Welcome, {localStorage.getItem('name')}!</h2>
        <p>You are logged in. Enjoy exploring the site!</p>
      </div>
    </div>
  );
}

export default WelcomePage;
