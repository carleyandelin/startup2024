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
            <NavLink className='nav-link' to='./ranking/scores'>Scores</NavLink>
            <NavLink className='nav-link' to='./ranking/strikes'>Strikes</NavLink>
            <NavLink className='nav-link' to='./ranking/spares'>Spares</NavLink>
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