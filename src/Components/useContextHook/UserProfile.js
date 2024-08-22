import React, { useContext } from 'react'
import AuthContext from './AuthContext'

const UserProfile = () => {
    const {user, logout} = useContext(AuthContext);

    if (!user) {
        return <div>Please log in.</div>;
      }
  return (
    
    <div>
    <h2>Welcome, {user.username}!</h2>
    <button onClick={logout}>Logout</button>
  </div>
  )
}

export default UserProfile