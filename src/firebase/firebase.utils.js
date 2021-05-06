import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyDTbD4Yqqpz2d7SYEpamlf9wd-FmJUL0kQ",
 authDomain: "shinrinyoku-db.firebaseapp.com",
 projectId: "shinrinyoku-db",
 storageBucket: "shinrinyoku-db.appspot.com",
 messagingSenderId: "369536798160",
 appId: "1:369536798160:web:98f7f87e3c973d935b7dd5",
 measurementId: "G-9Z6H3SF3VK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`)

const snapShot = await userRef.get();

if (!snapShot.exists) {
const { displayName, email } = userAuth; 
const createdAt = new Date();

try {
await userRef.set({ 
 displayName,
 email,
 createdAt,
 ...additionalData
})
} catch (err) {
console.log('error creating user', err.message)
}
}
return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;