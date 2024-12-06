import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDue13EdVgMpNt_ahsfVbqekh_hP6_4NaU",

  authDomain: "eshopper-69ac8.firebaseapp.com",

  projectId: "eshopper-69ac8",

  storageBucket: "eshopper-69ac8.firebasestorage.app",

  messagingSenderId: "605735855828",

  appId: "1:605735855828:web:980840f1d622625e423d41"

};


const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  'prompt': 'select_account'
});



// Google Sign-in
export const auth = getAuth(app);
export async function signInWithGooglePopup() {
  return await signInWithPopup(auth, googleProvider)
}

// Firestore Sign Up
export const db = getFirestore()
export async function createUserDocumentFromAuth(authData, dName) { //catch 'displayName' param
  const userDocRef = doc(db, 'users', authData.uid)         //create document reference to point towards
  const userGetDoc = await getDoc(userDocRef)               //get the document using above reference

  if (!userGetDoc.exists()) {                                 //if doesn't exist, setDoc insert
    try {
      await setDoc(userDocRef, {
        displayName: dName || authData.displayName,           //if 'null' use 'dName'
        email: authData.email,
        createdAt: new Date()
      })
    }
    catch (error) {
      console.log("User can't be created", error.message);
    }
  }
  else if (userGetDoc.exists()) {
    return userDocRef
  }
}

// Email-Password Sign-up
export async function signUpWithEmailPassword(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}