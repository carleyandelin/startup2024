import React from 'react';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome to BowlerBlitz!</h1>
      <form method="get" action="userInfo.html">
        <div>
          <span>Email:</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>Password:</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}