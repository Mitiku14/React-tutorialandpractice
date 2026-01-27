 import { useState } from 'react';
 import './LoginForm.css';

 function LoginForm() {
   const [showPassword, setShowPassword] = useState(false);

   return (
     <div className="card">
       <h3>Hello, welcome to my website</h3>

       <input className="input-box" placeholder="Email" />

       <div className="password-row">
         <input
           className="input-box"
           placeholder="Password"
           type={showPassword ? 'text' : 'password'}
         />

         <button
           className="toggle-btn"
           onClick={() => setShowPassword(!showPassword)}
         >
           {showPassword ? 'Hide' : 'Show'}
         </button>
       </div>

       <div className="button-row">
         <button className="btn login-btn">Login</button>
         <button className="btn signup-btn">Sign up</button>
       </div>
     </div>
   );
 }

 export default LoginForm;
