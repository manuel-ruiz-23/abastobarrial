import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSuPT0cS0cuoBlDhLg0kJWas1EY7hlVJo",
  authDomain: "consumelocalhmo-e72c5.firebaseapp.com",
  databaseURL: "https://consumelocalhmo-e72c5.firebaseio.com",
  projectId: "consumelocalhmo-e72c5",
  storageBucket: "consumelocalhmo-e72c5.appspot.com",
  messagingSenderId: "144064129273",
  appId: "1:144064129273:web:9956a9b9c0fc08596a1a28",
  measurementId: "G-Q9WNL0M5R3"
};

firebase.initializeApp(firebaseConfig);

//setup language
firebase.auth().useDeviceLanguage();

const fbProvider = new firebase.auth.FacebookAuthProvider();

function loginWithFacebook() {
  firebase.auth().signInWithPopup(fbProvider).then(function(result){
    //this gices you a Facebook Access Token, you can use it to access the facebook API
    // const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // console.log('auth', token, user);
    console.log('more auth', user.uid, user.displayName, user.photoURL);

    return {
      uid: user.uid,
      name: user.displayName,
      photoUrl: user.photoURL
    }
  }).catch(function(error) {
    // Handle errors here
    const { code, message } = error;
    console.log('error', code, message);
  })
}

export {loginWithFacebook}

