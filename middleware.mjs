// @ts-check

import express from 'express';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import session from 'express-session';
import {Firestore} from '@google-cloud/firestore';
import {FirestoreStore} from '@google-cloud/connect-firestore';
import {routing} from './routes/index.mjs';

const greetings = [
  'Hello World',
  'Hallo Welt',
  'Ciao Mondo',
  'Salut le Monde',
  'Hola Mundo',
];

/**
 * 
 * @param { express.Express } server 
 */
function registerMiddleware (server) {

  
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }));

  // session store
  // server.use(
  //   session({
  //     store: new FirestoreStore({
  //       dataset: new Firestore(),
  //       kind: 'express-sessions',
  //     }),
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: true,
  //   })
  // );

  routing(server);

  // if (!req.session.views) {
  //   req.session.views = 0;
  //   req.session.greeting =
  //     greetings[Math.floor(Math.random() * greetings.length)];
  // }
  // const views = req.session.views++;
  // res.send(`${views} views for ${req.session.greeting}`);
}

export {
  registerMiddleware
}
