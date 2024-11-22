import React from 'react';

export function Login() {
  const mainStyle = {
    flex: '1 calc(100vh - 110px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: "url('/bowlingBackground.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main style={mainStyle}>
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
