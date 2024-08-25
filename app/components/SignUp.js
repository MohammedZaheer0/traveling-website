import React from 'react';
import LoginSignUpComponent from '../components/LoginSignUpComponent';

const RegistrationForm = () => {
  return (
    <div>
      <LoginSignUpComponent 
        name='SignUp'
        button='SignUp'
        footer='Already have an account?'
        page='Login'
      />
    </div>
  );
}

export default RegistrationForm;

