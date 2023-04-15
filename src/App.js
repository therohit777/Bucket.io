import React from 'react';
import './App.style.scss';
import Home from './routes/home/home.components';
import { Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.components';

const App = ()=> {
  return (
    <Routes> 
      <Route path='/' element={<Navigation/>}> 
         <Route index element={<Home/>}/>
         <Route path='/auth' element={<Authentication/>}/>
      </Route> 
    </Routes>
  )
}

export default App;
