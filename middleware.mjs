// @ts-check

import express from 'express';
import cookieParser from 'cookie-parser';
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
  server.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

  server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  routing(server);

}

export {
  registerMiddleware
}
