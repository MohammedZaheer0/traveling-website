'use client';
import React from 'react';
import LoginSignUpComponent from '../components/LoginSignUpComponent';

const Login = () => {
  return (
    <div>
      <LoginSignUpComponent 
        name='Login'
        button='Login'
        rememberMe='Remember me'
        footer="Don't have an account?"
        page='SignUp'
      />
    </div>
  );
}

export default Login;
