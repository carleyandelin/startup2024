import React from 'react';
import './strikes.css';

export function Strikes() {
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
          <td>Tom Andelin</td>
          <td>9</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Meesa Andelin</td>
          <td>7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Carley Andelin</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  </main>
  );
}
