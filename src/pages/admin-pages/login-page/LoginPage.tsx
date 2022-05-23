import React, {FC, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FloatInput from '../../../components/UI/FloatInput/FloatInput';
import { useActions } from '../../../hooks/useActions';
import { useValidationTimer } from '../../../hooks/useValidationTimer';
import { isFieldFilled } from '../../../services/validation';
import { InputChangeHandler } from '../../../types/types';
import './loginPage.scss';
const LoginPage: FC = () => {
  const {loginAdmin} = useActions();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const onEmailChange: InputChangeHandler = (e) => {
    setEmail(e.target.value);
  }
  const [password, setPassword] = useState<string>("");
  const onPasswordChange: InputChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const {status, startTimer} = useValidationTimer();

  const onLoginClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    startTimer();
    loginAdmin();
    navigate('/');
  }

  return (
    <main className="admin_login_page">
      <form className="login_form">
        <h1>Log In</h1>
        <FloatInput
          label="Email"
          value={email}
          onChange={onEmailChange}
          isFilled={!status || isFieldFilled(email)}
          />
        <FloatInput
          value={password}
          onChange={onPasswordChange}
          label="Password"
          type="password"
          isFilled={!status || isFieldFilled(password)}
          />
        <button onClick={onLoginClick}>Log In</button>
      </form>
    </main>
  );
}

export default LoginPage;