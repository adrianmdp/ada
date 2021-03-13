import firebase from 'firebase'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyb2OtqWhbxYIRMyxrYnt_aOrgEFhdFGg",
    authDomain: "ada-frontend-e41ad.firebaseapp.com",
    databaseURL: "https://ada-frontend-e41ad-default-rtdb.firebaseio.com",
    projectId: "ada-frontend-e41ad",
    storageBucket: "ada-frontend-e41ad.appspot.com",
    messagingSenderId: "377369507936",
    appId: "1:377369507936:web:50d144545efe5a50406b05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }