import React from "react";
import 'boot'

export default function LoginPage() {
  return (
    <div>
      <h2>Login Form</h2>
      <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" />
      </div>
      <div className="form-group">
          <label htmlFor="email">Password</label>
          <input type="password" />
      </div>
      <div className="form-group">
          <input type="checkbox" />
          <label htmlFor="email">Remember me</label>
      </div>
      <button type='submit' className='btn'>Logar</button>
     
    </div>
  )
}