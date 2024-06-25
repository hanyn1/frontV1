import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthLayout from './AuthLayout';

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();

    const validatePassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
           if (!password.match(passwordRegex)) {
             setPasswordError(
               'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
             );
        return false;
        }
        setPasswordError('');
        return true;
      };
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.match(emailRegex);
      };

    const loginFun = () => {
        if (!email || !password) {
          Swal.fire({
            icon: 'error',
            title: 'Empty Fields',
            text: 'Please fill in all fields',
          });
          return;
        }
    
        if (!validateEmail()) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address',
          });
          return;
        }
    
        try {
          if (!validatePassword()) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Password',
              text: 'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.',
            });
            return;
          }
        } catch (error) {
          console.error('Error in validatePassword:', error);
          return;
        }
    
        const data = {
          email: email,
          password: password,
        };
    
        axios.post('http://localhost:4000/authentication/login', data)
          .then((response) => {
            console.log(response.data);
            if (response.data.password === 'false') {
              Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Please enter a valid password',
              });
            } else {
              // If login is successful, pass user data to setUser function
              setUser({
                email: response.data.email,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                num: response.data.num,
              });
              navigate('/home'); // Navigate to home page after successful login
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };  
    const signup = () => {
        navigate('/SignUp');
      };

  return (
    <AuthLayout>
    <div className="custom-wrapper">
        <div className="custom-card">
            <div className="custom-card-body">
                <div className="custom-text-center custom-mb-4">
                    <img onClick={() => navigate('/')} src={logo1} alt="logo" className="custom-login-logo" />
                </div>
                <h3 className="custom-card-title custom-text-center">LOG IN TO YOUR ACCOUNT</h3>
                <div className="custom-form-group">
                    <input
                        type="text"
                        placeholder="Email"
                        className="custom-form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="custom-form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        className="custom-form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='custom-forget'>
                <a href="/login" className='custom-forget-text'>forget password</a>
                </div>
                
                {passwordError && (
                    <div className="custom-text-danger custom-mb-3">{passwordError}</div>
                )}
                <div className="custom-text-center">
                    <button onClick={loginFun} className="custom-btn custom-btn-primary custom-btn-block">
                        Login
                    </button>
                </div>
                <p className="custom-text-center custom-mt-3 custom-card-subtitle">NEED TO CREATE AN ACCOUNT?</p>
                <div className="custom-text-center">
                    <button onClick={signup} className="custom-btn custom-btn-green custom-btn-block">
                        Register now
                    </button>
                </div>
            </div>
        </div>
    </div>
</AuthLayout>
  )
}


