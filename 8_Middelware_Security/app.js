import express from 'express';

import helmet from 'helmet';

import rateLimit from 'express-rate-limit';

import session from 'express-session';

import router from './routers/planets.js';

const app = express();
const baseLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use('/auth', authLimiter);
app.use(baseLimiter);

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
  );
  
  app.use(router);
app.use(express.static('public'));
app.use('/auth/*', ipLogger);
app.use(helmet());

/* app.get("/clothes", (req, res) =>{
  res.sendFile(__dirname + "/public/clothes.html")
}); */

app.post('/auth/login', (res, req) => {
  res.send({ message: 'You are trying to log in...' });
});
app.get('/room', (req, res, next) => {
  console.log({ data: 'You are in room 1' });
  next();
});

function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}
app.get('/frontgate', ipLogger, (req, res) => {
  res.send({});
});

app.get('/room', (req, res, next) => {
  res.send({ data: 'You are in room 2' });
});

const isHatchOpen = true;
function allowEscape(req, res, next) {
  if (isHatchOpen) {
    console.log('Go on');
    req.escape = 'Jimmy';
    next();
  } else {
    res.send({ message: 'You are not allowed to pass' });
  }
}

app.get('/escapehatch', allowEscape, (req, res) => {
  res.send({ message: `Congrats ${req.escape}, you have managed to escape!` });
});

app.get('*', (req, res) => {
  res.send('<h1>Not found 404</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('The app is working on', PORT);
});
