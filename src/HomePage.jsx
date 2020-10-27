import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/AboutPage">About</Link></li>
        <li><Link to="/">Restaurants</Link></li>
      </ul>
    </div>
  );
}
