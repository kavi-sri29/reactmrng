import React,{useState} from 'react'

const LoginLogout = () => {
    let [loggedIn, setLoggedIn] = useState(false);
    const toggleLogin = () => {
        if(loggedIn){
            setLoggedIn(false);
        }
        else{
            setLoggedIn(true);
        }
    }
  return (
    <div>
        {loggedIn && 'Welcome User'}
        {!loggedIn && 'Please Login'}
        <br />
        <button onClick={toggleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default LoginLogout