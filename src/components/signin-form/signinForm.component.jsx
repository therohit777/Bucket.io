import { useState } from "react";
import FormInput from "../formsinput/forminput.component";
import "./signin-form.style.scss";
import {createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect, signinWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import Button from "../button/button.component";

const defaultformFields = {
    email:'',
    password:'',
}
const Signin = () => {
  const [Fields,setFields] = useState(defaultformFields);
  const {email, password} = Fields;
  // console.log(Fields)

  const handlesubmit = async(event)=>{
    event.preventDefault();
    try{
      const response = await signinWithEmailAndPassword(email,password);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  }

  const logGoogleuser = async ()=>{ 
    const {user} = await signInWithGooglePopup(); // user is a separate data inside response which we get here by destructuring.
    const useresponse = await createUserDocumentFromAuth(user); 
    console.log(useresponse);
  }


  const changeHandler = (event)=>{
    const {name,value} = event.target;
    setFields({...Fields,[name]:value});//updates the state of an object by creating a new object that spreads the existing state and adds or modifies a key-value pair specified by the name and value variables. 
  }
  return (
    <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password </span>    
        <form onSubmit={handlesubmit}>
            <FormInput label='Email' type="email" required onChange={changeHandler} name='email' value={email}/>
            <FormInput label='Password' type="password" required onChange={changeHandler} name='password' value={password}/>
            <div className="buttons-container">
              <Button children={'Signin'} buttonType='inverted' type="submit"/>
              <Button children={'SignIn with Google'} buttonType='google' onClick={logGoogleuser}/>
            </div>
        </form>
    </div>
  )
}

export default Signin;