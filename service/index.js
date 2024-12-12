const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetScores
secureApiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// SubmitScore
secureApiRouter.post('/score', async (req, res) => {
  const score = { ...req.body, ip: req.ip };
  await DB.addScore(score);
  const scores = await DB.getHighScores();
  res.send(scores);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);


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

