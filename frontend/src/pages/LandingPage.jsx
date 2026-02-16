import React from "react";
import {Link} from "react-router-dom"
import { useContext } from "react";
import AuthProvider from '../context/AuthContext'

function LandingPage() {
  


  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h1>Apna Vidio call</h1>
        </div>
        <div className="navlist">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button"><p>Login</p></div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><spans style={{color:"#FF9839"}}>Connect</spans> with Your Love Once</h1>
          <p>Cover a Distance by Apana Video call</p>
          <div role="button">
            <Link to="/auth">Get Started</Link>
          </div>
        </div>
        <div className="">
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
