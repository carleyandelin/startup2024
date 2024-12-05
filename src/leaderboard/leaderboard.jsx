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

  // below is (hopeful) code for options of ranking. decided to do the minimun for class since I'm behind

// // start of psuedocode and things that I need to implement
// function TableData(choice) {
//   if (choice === "Scores") {
//     return [
//         <table>
//           for i in scores_list.size {
//             <tr>
//             <td>[i]</td>
//             <td>[user.name]</td>
//             <td>[user.score]</td>
//           </tr>}
//         </table>
//     ]
//   }
//   else if (choice === "Strikes") {
//     return [
//       <table>
//           for i in strikes_list.size {
//             <tr>
//             <td>[i]</td>
//             <td>[user.name]</td>
//             <td>[user.strikes]</td>
//           </tr>}
//         </table>
//     ]
//   }
//   else if (choice === "Spares") {
//     return [
//       <table>
//           for i in spares_list.size {
//             <tr>
//             <td>[i]</td>
//             <td>[user.name]</td>
//             <td>[user.spares]</td>
//           </tr>}
//         </table>
//     ]
//   }
// }
// // also line 80
// // end of said psuedocode and implementation requirements

//   return (
//     <main style={mainStyle}>
//       <h1>BowlerBlitz Leaderboard</h1>
//       <h6><em>please select ranking category</em></h6>
//       <table>
//           <thead>
//             <tr>
//               <th>Rank</th>
//               <th>Name</th>
//               <th>
//                 <div className="dropdown">
//           <button className="dropdown-btn">Select</button>
//           <div className="dropdown-content">
//             <a className="nav-link" href='./ranking/scores'>Scores</a>
//             <a className="nav-link" href='./ranking/strikes'>Strikes</a>
//             <a className="nav-link" href='./ranking/spares'>Spares</a>
//           </div>
//         </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {TableData(choice)}
//           </tbody>
//         </table>
//     </main>
//   );

return (
  <main style={mainStyle}>
    <h1>BowlerBlitz Leaderboard</h1>
    <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        <table>
        <tr>
          <td></td>
          <td>table placeholder</td>
          <td></td>
        </tr>
        </table>
        </tbody>
      </table>
  </main>
);
}

// {scoresList.map((user, i) => (    // need to make scoresList. Hopefully a priority queue
//   <tr key={i}>
//     <td>{i}</td>
//     <td>{user.name}</td>
//     <td>{user.score}</td>
//   </tr>
// ))}
