import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAVZzIXu_Kx1A54wkcH7kb5mKUU0bawe10',
  authDomain: 'crwn-db-3e1f4.firebaseapp.com',
  projectId: 'crwn-db-3e1f4',
  storageBucket: 'crwn-db-3e1f4.appspot.com',
  messagingSenderId: '915703930696',
  appId: '1:915703930696:web:180f28b30373007b859d7d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
