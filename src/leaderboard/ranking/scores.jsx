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
