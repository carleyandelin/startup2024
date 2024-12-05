import React from 'react';
import './userInfo.css';
import { Leaderboard } from '../leaderboard/leaderboard';
import { Link } from 'react-router-dom';

export function UserInfo() {
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

  // code for scores, strikes, and spares: 

  // return (
  //   <main style={mainStyle}>
  //     <h1>Welcome back to BowlerBlitz!</h1>
  //     <h3>Input your latest bowling stats below</h3>
  //     <form method="get" action="userInfo.html">
  //       <div>
  //         <span>Score:</span>
  //         <input type="int" placeholder="###" />
  //       </div>
  //       <div>
  //         <span>Number of Strikes:</span>
  //         <input type="int" placeholder="##" />
  //       </div>
  //       <div>
  //           <span>Number of Spares:</span>
  //           <input type="int" placeholder="##" />
  //         </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </main>
  // );

function captureScore() {
  // do submit functionality
}


  return (
    <main style={mainStyle}>
      <h1>Welcome back to BowlerBlitz!</h1>
      <h3>Input your latest bowling stats below</h3>
      <form method="get" action="userInfo.html">
        <div>
          <span>Score:</span>
          <input type="int" placeholder="###" />
        </div>
        <Link to='/leaderboard'>
        <button onClick={() => captureScore()}>Submit and see Leaderboard</button>
        </Link>
      </form>
    </main>
  );
}
