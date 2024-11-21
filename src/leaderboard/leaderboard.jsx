import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
  return (
    <main className='container-fluid bg-secondary text-center'>
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