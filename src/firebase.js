import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

//setup language
firebase.auth().useDeviceLanguage();

const fbProvider = new firebase.auth.FacebookAuthProvider();

async function loginWithFacebook() {

  try {

    const result = await firebase.auth().signInWithPopup(fbProvider)
    
    const user = result.user;
    
    console.log('more auth', user.uid, user.displayName, user.photoURL);
    
    return {
      uid: user.uid,
      name: user.displayName,
      photoUrl: user.photoURL
    }
  } catch (error) {
    const { code, message } = error;
    console.log('error', code, message);
  }
}

var googleProvider = new firebase.auth.GoogleAuthProvider();

async function loginWithGoogle() {

  try {
    const result = await firebase.auth().signInWithPopup(googleProvider)
    
    // const token = result.credential.accessToken

    const user = result.user

    console.log('auth', user)
  } catch (error) {
    const { code, message } = error
    console.log('error', code, message)
  }

}

  /* Auth API */
    
const doCreateUserWithEmailAndPassword = (email, password) => {
  firebase.auth.createUserWithEmailAndPassword(email, password)
}

const doSignInWithEmailAndPassword = (email, password) => {
  firebase.auth.signInWithEmailAndPassword(email, password)
}

const doSignOut = () => {
  firebase.auth.signOut()
}

const doPasswordReset = email => {
  firebase.auth.sendPasswordResetEmail(email)
} 

const doPasswordUpdate = password => {
  firebase.auth.currentUser.updatePassword(password)
}

const doSendEmailVerification = () => {
  firebase.auth.currentUser.sendEmailVerification()
}



export {loginWithFacebook, loginWithGoogle }

