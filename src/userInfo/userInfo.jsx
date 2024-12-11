import React from 'react';
import './userInfo.css';
import { Leaderboard } from '../leaderboard/leaderboard';
import { Link } from 'react-router-dom';

export function UserInfo(props) {
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

  const userName = props.userName;
  const [score, setScore] = React.useState("");

  async function saveScore(score) {
    const newScore = { name: userName, score: score };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
  }


  return (
    <main style={mainStyle}>
      <h1>Welcome back to BowlerBlitz!</h1>
      <h3>Input your latest bowling stats below</h3>
      <form method="get" action="userInfo.html">
        <div>
          <span>Score:</span>
          <input className='form-control' value={score} onChange = {(e) => setScore(e.target.value)} type="int" placeholder="###" />
        </div>
        <Link to='/leaderboard'>
        <button onClick={() => saveScore()}>Submit and see Leaderboard</button>
        </Link>
      </form>
    </main>
  );
}




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
