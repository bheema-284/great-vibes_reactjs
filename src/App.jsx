import { useState } from 'react'
import { Route,Routes } from 'react-router';
import './App.css'
import { Home } from './components/Home';
import { Users } from './components/Users';
import {LoginForm} from "./components/LoginFrom"
import Registration from "./components/Form"
function App() {  
  return (
    <div className="App">
      {/* <Home />
      <Routes>                
        <Route path="/registration" element={<LoginForm />}></Route>        
        <Route path="/users" element={<Users />}></Route>
      </Routes> */}
      <Registration/>
    </div>
  );
}

export default App


