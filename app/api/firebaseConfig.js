import firebase from 'firebase';

try {
  const config = {
    apiKey: 'AIzaSyAxuapjzzcZ0KdqFGUSbOUOudg5Aa_oDeo',
    authDomain: 'golfscorecard-8d31b.firebaseapp.com',
    databaseURL: 'https://golfscorecard-8d31b.firebaseio.com',
    storageBucket: 'golfscorecard-8d31b.appspot.com',
    messagingSenderId: '105187556322',
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseRef = firebase.database().ref();

export default firebase;
