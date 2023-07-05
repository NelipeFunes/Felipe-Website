import React from "react";
import { useState, useEffect } from "react";
import { login } from "../services/api";

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberBtn, setRemBtn] = useState(false);

  useEffect(() => {
    const checkRememberBtn = () => {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      if (email !== null && password !== null) {
        setEmail(email);
        setPassword(password);
        setRemBtn(true);
      }
    };
    checkRememberBtn();
  }, [])

  const makeLogin = async () => {
    const response = await login(email, password);
  };


  const rememberMeBtn = () => {
    setRemBtn(!rememberBtn);
    if (rememberBtn === false) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    };
  }

  return (
    <div>
      <h2>Login Form</h2>
      <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" value={ email } onChange={({ target }) => {setEmail(target.value)}}/>
      </div>
      <div className="form-group">
          <label htmlFor="email">Password</label>
          <input type="password" value={ password } onChange={({ target }) => {setPassword(target.value)}}/>
      </div>
      <div className="form-group">
          <input type="checkbox" checked={rememberBtn} onChange={ () => rememberMeBtn() } />
          <label htmlFor="email">Remember me</label>
      </div>
      <button type='submit' className='btn' onClick={() => makeLogin()}>Logar</button>
     
    </div>
  );
};