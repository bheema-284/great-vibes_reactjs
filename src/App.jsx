import { useState } from 'react'
import { Route,Routes } from 'react-router';
import './App.css'
import { Home } from './components/Home';
import { Users } from './components/Users';
import {LoginForm} from "./components/LoginFrom"
function App() {  
  return (
    <div className="App">
      <Home />
      <Routes>                
        <Route path="/registration" element={<LoginForm />}></Route>        
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App


