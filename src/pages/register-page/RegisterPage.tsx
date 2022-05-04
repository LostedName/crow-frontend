import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import FloatInput from '../../components/UI/FloatInput/FloatInput';
import './registerPage.scss';

const RegisterPage: FC = () => {
  return (
    <main className="register_page">
      <form className='reg_form'>
        <h1>Sign Up</h1>
        <FloatInput label="Email" />
        <FloatInput label="Name" />
        <FloatInput label="Password" type="password" />
        <button>Sign up</button>
      </form>
      <div className="bottom-phrase">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </main>
  );
}

export default RegisterPage;