import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyDh4ZqnrJ0p032TIdMAXETxugdnD3bbxLg",
    authDomain: "vendor-eddac.firebaseapp.com",
    projectId: "vendor-eddac",
    storageBucket: "vendor-eddac.appspot.com",
    messagingSenderId: "735609426980",
    appId: "1:735609426980:web:c9270dd7c55f3a5427f4b1"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
