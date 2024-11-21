import React from 'react';
import './spares.css';

export function Spares() {
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
              <td>Kaitlyn Hamilton</td>
              <td>7</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elon Musk</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>The Rock</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </main>
  );
}
