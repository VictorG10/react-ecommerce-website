import React from "react";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name..." />
          <input type="email" name="" id="" placeholder="Email Address..." />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Password..."
          />
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account ? <span>Login here</span>
          </p>

          <div className="loginsignup-agree">
            <div>
              <input type="checkbox" name="" id="" />
            </div>

            <div>
              <p>
                By continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
