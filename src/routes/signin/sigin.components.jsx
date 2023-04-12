import React, { useEffect } from 'react';
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';

const Signin = () => {
  useEffect(() => {
    const getUsers = async () => {
      const response = await getRedirectResult(auth); // user is a separate data inside response which we get here by destructuring.
      console.log(response);
    }
    getUsers();
  }, []);
 

  const logGoogleuser = async ()=>{
    const {user} = await signInWithGooglePopup(); // user is a separate data inside response which we get here by destructuring.
    const useresponse = await createUserDocumentFromAuth(user); 
    console.log(useresponse);
  }


  return (
    <div>
        Signin
        <button onClick={logGoogleuser}>SignIn with Google</button>
        <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button>
    </div>
  )
}

export default Signin