import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});


export const auth = getAuth();
export async function signInWithGooglePopup() {
  return await signInWithPopup(auth, provider)
}

export const db = getFirestore()
export async function createUserDocumentFromAuth(authData) {
  const userDocRef = doc(db, 'users', authData.uid)         //create document reference to point towards
  const userGetDoc = await getDoc(userDocRef)               //get the document using above reference
  // console.log(userGetDoc); 

  if (!userGetDoc.exists()) {                                 //if doesn't exist, setDoc insert
    try {
      await setDoc(userDocRef, {
        displayName: authData.displayName,
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