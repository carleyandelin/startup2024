import React from 'react';
import './scores.css';

export function Scores() {
  return (
    <main>
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
              <td>Abigail Beus</td>
              <td>118</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Carley Andelin</td>
              <td>115</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Daisy Bailey</td>
              <td>107</td>
            </tr>
          </tbody>
        </table>
      </main>
  );
}
