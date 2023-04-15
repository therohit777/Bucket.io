// import React, { useEffect } from 'react';
// import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
// import { getRedirectResult } from 'firebase/auth';
import Signup from '../../components/signup-form/signupForm.component';
import Signin from '../../components/signin-form/signinForm.component';

const Authentication = () => {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await getRedirectResult(auth); // user is a separate data inside response which we get here by destructuring.
  //     console.log(response);
  //   }
  //   getUsers();
  // }, []);
 
  return (
    <div>
        Authentication
        {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}
        <Signin/>
        <Signup/>
    </div>
  )
}

export default Authentication