import React from 'react';
import { Link } from 'react-router-dom';
import FloatInput from '../../components/UI/FloatInput/FloatInput';
import './loginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <main>
      <form className="login_form">
        <h1>Log In</h1>
        <FloatInput label="Email" />
        <FloatInput label="Password" type="password" />
        <Link to="/forget-pass">Forget password?</Link>
        <button>Log In</button>
      </form>
      <div className="botton-phrase">
        Not registered yet? <Link to="/registration">Join us!</Link>
      </div>
    </main>
  );
}

export default LoginPage;