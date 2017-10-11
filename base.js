import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAlHjeXFTey4kk6-rxnUeoRnegkB0C012w",
    authDomain: "webware-a17-finalproject.firebaseapp.com",
    databaseURL: "https://webware-a17-finalproject.firebaseio.com",
    projectId: "webware-a17-finalproject",
    storageBucket: "",
    messagingSenderId: "58309927388"
};

const appBase = firebase.initializeApp(config);
const base = Rebase.createClass(appBase.database());

export {appBase,base};
