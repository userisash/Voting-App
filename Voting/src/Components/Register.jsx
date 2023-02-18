import { useState } from "react";

const Register = (props) => {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

return(
    <>
    <form className="login" >
          <label htmlFor="Email"></label>
          <input type="email" name="email" placeholder="youremail@gmail.com" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="Name"></label>
          <input type="text" name="name" id="name" placeholder="your name" value={name} onChange={e => setName(e.target.value)} required/>
          <label htmlFor="Password"></label>
          <input type="password" name="password" id="password" placeholder="your password" value={password} onChange={e => setPassword(e.target.value)} required />
          <input type="submit" value="Sign Up"/>
        </form>
        <p>Already have an account?</p>
        <input  type="submit" value="Log In"/>
    </>
)
}

export default Register