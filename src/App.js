import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Chat from './components/Chat';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import { auth } from '../src/firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/login"
     
    })

  };

  return (
    <Router>
      <nav>
      
      <Link className='nav_link' to="/">Home</Link>
        
       {!isAuth ? (<Link className='nav_link' to="/login">Login</Link>) : (
         <>
       <Link className='nav_link' to="/chat">Chat</Link>
       <button onClick={signUserOut}>Log Out</button>
       </>
       )}
       
       
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/Chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
