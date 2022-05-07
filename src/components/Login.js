import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import G_img from './assets/G-Suite.png'

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/chat");
        })
    }
  return (
    <div className='loginPage'>
        <div className='box-login'>
            <img className='g_img' src={G_img}/>
            <p>Sign In With Google</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
                Sign in
            </button>
        </div>
    </div>
  )
}

export default Login