import React from 'react'

const AdminLogin = () => {
  return (
    <div>
        <h1>Log In</h1>
        <label>Username: <input type='text' placeholder='username' id='username' /></label>
        <br /><label>Username: <input type='password' placeholder='password' id='password' /></label>
        <br /><button>Login</button>
        <p>If you haven't account </p>
    </div>
  )
}

export default AdminLogin