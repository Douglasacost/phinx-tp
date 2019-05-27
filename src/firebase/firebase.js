import * as firebase from 'firebase';
import { devConfig } from './config';

!firebase.apps.length && firebase.initializeApp(devConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {
  auth,
  db
}