import React from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { SearchBar } from "../UI";
import './header.scss';

const Header: React.FC = () => {

  const {loginUser} = useActions();
  const onLoginClick = () => {
    loginUser();
  }
  
  return (
    <header>
      <div className="leftside">
        <Link className="logo" to="/">
            <img src="./assets/logo_icon.png" alt="gramboo logo" />
            <span>Crow</span>
        </Link>
        <SearchBar />
      </div>
      <div>
        <Link to="/login" onClick={onLoginClick} className="btn login_btn">Log In</Link>
        <Link to="/registration" className="btn register_btn">Register</Link>
      </div>
    </header>
  ); 
}

export default Header;