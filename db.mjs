// @ts-check
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import {Firestore} from '@google-cloud/firestore';
// import serviceAccount from './serviceAccountKey.json' assert { type: "json" };
import serviceAccount from './serviceAccountKey.json';

// gcloudで初期化済みの場合。
// initializeApp({
//   credential: applicationDefault()
// });

initializeApp({
  // @ts-ignore
  credential: cert(serviceAccount)
});

const db = getFirestore();

// gcloud loginをして置くこと。
export {
  db
}

// Create a new client
// const db = new Firestore();

// if (isEmulating) {
//   firebase.auth().useEmulator("http://localhost:9099");
//   firebase.functions().useEmulator("localhost", 5001);
//   firebase.firestore().useEmulator("localhost", 8080);
// }

// export {
//   db
// }
