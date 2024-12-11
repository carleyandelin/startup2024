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

    const [scores, setScores] = React.useState([]);
  
    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/scores')
        .then((response) => response.json())
        .then((scores) => {
          setScores(scores);
        });
    }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='3'>Be the first to submit a score</td>
      </tr>
    );
  }

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
        <tbody id='scores'>{scoreRows}</tbody>
      </table>
  </main>
);}


// function rankingScores(scoresList) {
//   {allScores.map((user, i) => (    // allScores is in my service/index. How do I let leaderboard access it?
//     <tr key={i}>
//       <td>{i + 1}</td>
//       <td>{user.name}</td>
//       <td>{user.score}</td>
//     </tr>
//   ))}}




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
