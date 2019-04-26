import Rebase from "re-base"
import Firebase from "firebase"

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCqhiAYQ-0-zM-daCxSSxUwFpgNPl-RAYs",
    authDomain: "catch-of-the-day-believe.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-believe.firebaseio.com",
    projectId: "catch-of-the-day-believe",
    storageBucket: "catch-of-the-day-believe.appspot.com",
    messagingSenderId: "791828905753"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base