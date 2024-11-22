import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
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
      <h1>BowlerBlitz Leaderboard</h1>
      <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>
                <div className="dropdown">
          <button className="dropdown-btn">Select</button>
          <div className="dropdown-content">
            <a className="nav-link" href='./ranking/scores'>Scores</a>
            <a className="nav-link" href='./ranking/strikes'>Strikes</a>
            <a className="nav-link" href='./ranking/spares'>Spares</a>
          </div>
        </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Please Select Ranking Categoty</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}