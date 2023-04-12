import {initializeApp} from 'firebase/app'; // creates app function based on some config.
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';



// consists of secret keys to be used to access our project and initialize our firebaseAPP.
const firebaseConfig = { 
    apiKey: "AIzaSyD6NWxVEsG9hUlV5syqHCG_RUK2wGPsQ7s",
    authDomain: "bucketio.firebaseapp.com",
    projectId: "bucketio",
    storageBucket: "bucketio.appspot.com",
    messagingSenderId: "462189121092",
    appId: "1:462189121092:web:19d665e13c67c9ef53f611",
    measurementId: "G-LCEL10V40N"
  };

// Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig) 

//Setting up google Auth provider. Here we are always forcing to select an account while authenticating by use of custom parameters.
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
})


// creating Auth instances
export const auth = getAuth();

//Signin with Google Popup
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);
//Sigin with Google Redirect
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider);
// After this Go to Build->Authentication->SignIn method -> Enable Google in Firbase in order to do signin with google.




export const db = getFirestore(); // Initializing our firestore database
export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef=  doc(db,'users',userAuth.uid);//helps to get a document instance.(db is database instance,users is collection, userAuth.id is a unique identifier to identify our document.)
  const userSnapshot = await getDoc(userDocRef); // Getdoc helps in getting data from document in and setDoc helps in setting data in document. 
  console.log(userSnapshot.exists()); // Checking this particular document exists or not 

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const dates = new Date();
    try{
      setDoc(userDocRef,{displayName,email,dates});
    }
    catch(error){
      console.log("Error Message: ",error );
    }
  }

  return userDocRef;

}
