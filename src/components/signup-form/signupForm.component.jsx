import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../formsinput/forminput.component";
import "./signup-form.style.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const defaultformFields = {
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}
const Signup = () => {
  const [Fields,setFields] = useState(defaultformFields);
  const {displayName, email, password, confirmpassword} = Fields;
  // console.log(Fields)


  const handlesubmit = async(event)=>{
    event.preventDefault();// prevents the default action belonging to this event to occur.
    if(password!==confirmpassword){
      alert('password fields do not match')
    }
    
    try{
      const response = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(response.user,{displayName});
      console.log(response);
      setFields(defaultformFields);
    }
    catch(error){
      if(error.code==='auth/email-already-in-use'){//If this error code is present then it indicate that particular user already exists.
        alert('Cannot create this user, email already exists.')
      }
      else{
        console.log(error);
      }
    }
   
  }


  const changeHandler = (event)=>{
    const {name,value} = event.target;
    setFields({...Fields,[name]:value});//updates the state of an object by creating a new object that spreads the existing state and adds or modifies a key-value pair specified by the name and value variables. 
  }
  return (
    <div className="sign-up-container">
        <h2>Don't have an account</h2>
        <span>Sign up with your email and password </span>    
        <form onSubmit={handlesubmit}>
            <FormInput label='Display Name' type="text" required onChange={changeHandler} name='displayName' value={displayName}/>
            <FormInput label='Email' type="email" required onChange={changeHandler} name='email' value={email}/>
            <FormInput label='Password' type="password" required onChange={changeHandler} name='password' value={password}/>
            <FormInput label='Confirm Password' type="password" required onChange={changeHandler} name='confirmpassword' value={confirmpassword}/>
            <Button children={'Signup'}  type="submit"/>
        </form>
    </div>
  )
}

export default Signup;