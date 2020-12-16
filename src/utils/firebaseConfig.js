import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCm2RX-jvt2EYX1rhwltBQl3N8_KQykN-E",
    authDomain: "edux-d6dde.firebaseapp.com",
    projectId: "edux-d6dde",
    storageBucket: "edux-d6dde.appspot.com",
    messagingSenderId: "721585339378",
    appId: "1:721585339378:web:a87d29c4162032c695496b"
  };

 const app = firebase.initializeApp(firebaseConfig);

 export const db = app.firestore();
export default firebaseConfig;