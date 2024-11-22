import React from 'react';
import './about.css';

export function About() {
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
      <p>
        Introducing BowlerBlitz—your new go-to for sharing bowling scores and connecting with friends! Track your strikes, compare scores, and celebrate every spare with this website. Elevate your game and keep the fun rolling with BowlerBlitz—where every pin is a win!
      </p>
      <p>
        BowlerBlitz is currently under development. The creator, Carley, expresses gratitude for all the help she gets from class while creating this application.
      </p>
    </main>
  );
}