import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FloatInput from '../../components/UI/FloatInput/FloatInput';
import { useActions } from '../../hooks/useActions';
import './mustLoginPage.scss';

const MustLoginPage: React.FC = () => {
  const {loginUser} = useActions();
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);
  const onLoginClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginUser();
    navigate('/');
  }
  return (
    <main className="mustlogin_page">
      <form className="login_form">
        <h1>Log In to continue</h1>
        <FloatInput label="Email" />
        <FloatInput label="Password" type="password" />
        <Link to="/forget-pass">Forget password?</Link>
        <button onClick={onLoginClick}>Log In</button>
      </form>
      <div className="bottom-phrase">
        Not registered yet? <Link to="/registration">Join us!</Link>
      </div>
    </main>
  );
}

export default MustLoginPage;