import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDzIHeknDQrHRRm1TM-Gv2r4NsHfU4nPmc",
    authDomain: "class-voting-app.firebaseapp.com",
    databaseURL: "https://class-voting-app-default-rtdb.firebaseio.com",
    projectId: "class-voting-app",
    storageBucket: "class-voting-app.appspot.com",
    messagingSenderId: "1065022953825",
    appId: "1:1065022953825:web:e6c682d534901f320dcd20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();