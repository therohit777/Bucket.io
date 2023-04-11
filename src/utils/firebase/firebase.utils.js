import {initializeApp} from 'firebase/app'; // creates app function based on some config.
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

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



// After this Go to Build->Authentication->SignIn method -> Enable Google in Firbase in order to do signin with google.