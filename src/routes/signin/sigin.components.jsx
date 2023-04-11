import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const Signin = () => {

  const logGoogleuser = async ()=>{
    const response = await signInWithGooglePopup();
    console.log(response);
  }  

  return (
    <div>
        Signin
        <button onClick={logGoogleuser}>SignIn with Google</button>
    </div>
  )
}

export default Signin