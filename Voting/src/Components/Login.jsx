import React, { useState } from 'react';
import { logInUser } from './data';
import Voting from './cards';

function Login(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  function handleLogIn(e) {
    e.preventDefault();
    const user = logInUser(email, name, password);
    if (user) {
        props.onSuccessfulLogin();
    } else {
        setLoginError(true);
    }
  }

  return (
    <>
      <form className="login" onSubmit={handleLogIn}>
        <label htmlFor="Email"></label>
        <input type="email" name="email" placeholder="youremail@gmail.com" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label htmlFor="Name"></label>
        <input type="text" name="name" id="name" placeholder="your name" value={name} onChange={e => setName(e.target.value)} required/>
        <label htmlFor="Password"></label>
        <input type="password" name="password" id="password" placeholder="your password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="submit" value="Log In"/>
      </form>
      <p>Dont have an account ?</p>
      <button type="submit">Register Here</button>
    </>
  );
}

export default Login;

  