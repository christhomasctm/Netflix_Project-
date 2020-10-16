import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyDxru6_q_3EF1mBDSo3ihBi5PZtPyym2kY",
    authDomain: "netflix-project-b7fa5.firebaseapp.com",
    databaseURL: "https://netflix-project-b7fa5.firebaseio.com",
    projectId: "netflix-project-b7fa5",
    storageBucket: "netflix-project-b7fa5.appspot.com",
    messagingSenderId: "85437395148",
    appId: "1:85437395148:web:ec908005538636485a9269"
};

const firebase = Firebase.initializeApp(config);


export { firebase };