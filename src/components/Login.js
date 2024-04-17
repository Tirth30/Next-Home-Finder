// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { BiSolidShow, BiSolidHide } from "react-icons/bi";
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleLogin = (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     console.log('Login details:', email, password);

//     // Redirect to home page after successful login
//     history.push('/home');
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-form mt">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         {error && <p className="error">{error}</p>}
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter Your E-mail Id'
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <div className="password-container">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter Your Password'
//             required
//           />
//           <span className="password-toggle" onClick={handleShowPassword}>
//             {showPassword ? <BiSolidHide /> : <BiSolidShow />}
//           </span>
//         </div>
//         <button type='submit'>Login</button>
//       </form>
//       <p className='mt-10'>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };
// export default Login;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiSolidShow, BiSolidHide } from "react-icons/bi";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../firebase.config";
// import {toast} from 'react-tostify'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false)
//   const naVigate= useNavigate()


//   const signin = async(e)=>{

//     e.preventDefault()
//     setLoading(true)

//     try {

//       const userCredential = await signInWithEmailAndPassword(auth, email, password)

//       const user = userCredential.user

//       console.log(user)
//       setLoading(fal)
      
//     } catch (error){
//       setLoading(false)
//       toast.error(error.message);
//     }
    
//   }



//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Implement login logic here (e.g., API call)
//     console.log('Login details:', email, password);
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-form mt">
//       <h2>Login</h2>
//       <form className="auth_from" onSubmit={handleLogin}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter Your E-mail Id'
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <div className="password-container"> {/* Wrap input and icon */}
//           <input
//             type={showPassword ? 'text' : 'password'} // Toggle input type
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter Your Password'
//             required
//           />
//           <span className="password-toggle" onClick={handleShowPassword}>
//             {showPassword ? <BiSolidHide /> : <BiSolidShow />}
//           </span>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p className='mt-10'>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;






// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { BiSolidShow, BiSolidHide } from "react-icons/bi";
// import { auth } from '../firebase.config'; // Import Firebase authentication module

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const history = useHistory();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       // Sign in user with email and password
//       await auth.signInWithEmailAndPassword(email, password);
//       // Redirect user to home page after successful login
//       history.push('/about');
//     } catch (error) {
//       // Handle login errors (e.g., invalid credentials)
//       console.error('Login error:', error.message);
//     }
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-form mt">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter Your E-mail Id'
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <div className="password-container"> {/* Wrap input and icon */}
//           <input
//             type={showPassword ? 'text' : 'password'} // Toggle input type
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter Your Password'
//             required
//           />
//           <span className="password-toggle" onClick={handleShowPassword}>
//             {showPassword ? <BiSolidHide /> : <BiSolidShow />}
//           </span>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p className='mt-10'>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { BiSolidShow, BiSolidHide } from "react-icons/bi";
// import { auth } from '../firebase.config'; // Import Firebase authentication module
// import { toast } from 'react-toastify/dist/react-toastify.esm.mjs'; // Import react-toastify with correct path

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // Add loading state
//   const history = useHistory();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Set loading to true when login starts
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password); // Fix the signInWithEmailAndPassword call
//       const user = userCredential.user;
//       console.log(user);
//       setLoading(false); // Set loading to false after login attempt
//       toast.success('Successfully logged in');
//       history.push('/home'); // Navigate to the home page
//     } catch (error) {
//       setLoading(false); // Set loading to false if login fails
//       toast.error(error.message); // Display error message using toast
//     }
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-form mt">
//       <h2>Login</h2>
//       <form className="auth_from" onSubmit={handleLogin}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter Your E-mail Id'
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <div className="password-container"> {/* Wrap input and icon */}
//           <input
//             type={showPassword ? 'text' : 'password'} // Toggle input type
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter Your Password'
//             required
//           />
//           <span className="password-toggle" onClick={handleShowPassword}>
//             {showPassword ? <BiSolidHide /> : <BiSolidShow />}
//           </span>
//         </div>
//         <button type="submit" disabled={loading}>Login</button> {/* Disable button when loading */}
//       </form>
//       <p className='mt-10'>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success('Successfully logged in');
      history.push('/home');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form mt">
      <h2>Login</h2>
      <form className="auth_from" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your E-mail Id'
          required
        />
        <label htmlFor="password">Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Your Password'
            required
          />
          <span className="password-toggle" onClick={handleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>
      <p className='mt-10'>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
