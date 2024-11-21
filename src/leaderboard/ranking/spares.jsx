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
