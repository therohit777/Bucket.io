import { createContext, useEffect, useState } from "react";
import { onAuthStateChanges,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Storage part stores the default value which we wanna access
export const UserContext =createContext({ 
    currentUser: null,
    setcurrentUser: ()=>null,
})

//  Acutal component
//  {Children} : It refers to the child component.
//  UserContext.Provider: IT wraps the components where we need our storage values
//  value: It is the value{state,UseState} here which our chidren component can access to. 

export const UserProvider =({children})=>{
    const [currentUser, setcurrentUser] = useState(null);
    const value ={currentUser,setcurrentUser}
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanges((user)=>{
        console.log(user);
        if(user){
          createUserDocumentFromAuth(user); 
        }
        setcurrentUser(user);
      })
      return unsubscribe;
    }, [])
    


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}