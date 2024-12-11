const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 100) {
    scores.length = 100;
  }

  return scores;
}





// Previous code I'm scared to get rid off


// const express = require('express');
// const uuid = require('uuid');
// const app = express();

// // The users object stores user data and their scores
// let users = {};
// let scores = [];

// // The service port. In production, the front-end code is statically hosted by the service on the same port.
// const port = process.argv.length > 2 ? process.argv[2] : 4000;

// // JSON body parsing using built-in middleware
// app.use(express.json());

// // Serve up the front-end static content hosting
// app.use(express.static('public'));

// // Router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// // CreateAuth a new user
// apiRouter.post('/auth/create', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     res.status(409).send({ msg: 'Existing user' });
//   } else {
//     const newUser = {
//       email: req.body.email,
//       token: uuid.v4(),
//       scores: [] // Initialize an empty scores array
//     };
//     users[newUser.email] = newUser;

//     res.send({ token: newUser.token });
//   }
// });

// // GetAuth login an existing user
// apiRouter.post('/auth/login', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     user.token = uuid.v4(); // Refresh the token
//     res.send({ token: user.token });
//   } else {
//     res.status(401).send({ msg: 'Unauthorized' });
//   }
// });

// // DeleteAuth logout a user
// apiRouter.delete('/auth/logout', (req, res) => {
//   const user = Object.values(users).find((u) => u.token === req.body.token);
//   if (user) {
//     delete user.token; // Remove the token to log out the user
//   }
//   res.status(204).end();
// });

// // SubmitScore for the logged-in user
// apiRouter.post('/score', (req, res) => {
//   // const user = Object.values(users).find((u) => u.token === req.body.token);

// //   if (!user) {
// //     return res.status(401).send({ msg: 'Unauthorized' });
// //   }

//   if (!req.body.score) {
//     return res.status(400).send({ msg: 'Score is required' });
//   }

//   // Update user's scores
//   scores = updateScores( req.body , scores);

//   res.send(scores);
// });

// // Get the scores for the logged-in user
// apiRouter.get('/user/scores', (req, res) => {
//   // const user = Object.values(users).find((u) => u.token === req.query.token);

// //   if (!users) {
// //     return res.status(401).send({ msg: 'Unauthorized' });
// //   }

//   res.send(scores);
// });

// // GetScores globally
// apiRouter.get('/scores', (_req, res) => {
//   const allScores = Object.values(users).flatMap((user) =>
//     scores.map((score) => ({
//       email: user.email,
//       score: score.score,
//       timestamp: score.timestamp
//     }))
//   );

//   // Sort scores across all users and limit to top 100
//   allScores.sort((a, b) => b.score - a.score);
//   res.send(allScores.slice(0, 100));
// });

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// // updateScores considers a new score for inclusion in the high scores.
// function updateScores(newScore, scores) {
//   let found = false;

//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   return scores;
// }

