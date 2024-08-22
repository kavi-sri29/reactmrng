import React, { useContext,useState } from 'react'
import AuthContext from './AuthContext';

const Login = () => {

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');


    const handleLogin = () => {
        login(username);
        setUsername('');
      };
  return (
    <div>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
    />
    <button onClick={handleLogin}>Login</button>
  </div>

  )
}

export default Login