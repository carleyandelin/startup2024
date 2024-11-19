import React from 'react';
import './userInfo.css';

export function userInfo() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome back to BowlerBlitz!</h1>
      <h3>Input your latest bowling stats below</h3>
      <form method="get" action="userInfo.html">
        <div>
          <span>Score:</span>
          <input type="int" placeholder="###" />
        </div>
        <div>
          <span>Number of Strikes:</span>
          <input type="int" placeholder="##" />
        </div>
        <div>
            <span>Number of Spares:</span>
            <input type="int" placeholder="##" />
          </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}