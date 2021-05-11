import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCA2Mes4QoZFNEDnxG5v2MBNG39LxBi1xo",
  authDomain: "crwn-clothing-e40d9.firebaseapp.com",
  projectId: "crwn-clothing-e40d9",
  storageBucket: "crwn-clothing-e40d9.appspot.com",
  messagingSenderId: "1042394358521",
  appId: "1:1042394358521:web:20b964298cd09387a9f828",
  measurementId: "G-6W1CCH9J7J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;