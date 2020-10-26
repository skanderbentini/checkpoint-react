import React from "react"
import './App.css';
import { Button, form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';


function App() {
  return (
    <form className="Login-form">
    <h1>
      <span className="font-weight-bold">Mywebsite</span>.com
      </h1>      
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <label>Email</label>
        <input id="emaiil" type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <input id="pasword" type="password" placeholder="Password"/>
      </FormGroup>
      <button className="btn-lg btn-dark btn-block">
        Log in
        </button>
        <div className="text-center pt-3">
          Or continue with your social account
          </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/sign-up">sign up</a>
            <span className="p-2">|</span>
            <a href="/Forgot-password">Forgot password</a>

            </div>
    
    </form>
  );
}

export default App;
