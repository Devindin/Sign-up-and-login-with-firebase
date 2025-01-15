import React , { useState }  from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

function Login() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
           .then(() => alert('User logged successfully'))
           .catch((error) => alert('Error: ' + error.message));
       };

  return (
    <div>
    <h1> Login page</h1>
      <label>Enter your Email</label>
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        required 
        placeholder="Enter your email" 
      />
      <label>Enter your Password</label>
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        required 
        placeholder="Enter your password" 
      />
      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login
