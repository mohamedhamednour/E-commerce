import React, { useRef, useState } from "react"
import { Link ,useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/usecontext"

import {  Alert } from "react-bootstrap"


import "../App.css";

export default function Signin() {
  const navigate = useNavigate();

    const emailRef = useRef() //vlaue email
  const passwordRef = useRef()//vlaue password
  const { login } = useAuth() //import login fron usecontext
  const [error, setError] = useState("") //hande error
  const [loading, setLoading] = useState(false)
//login by firebase
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value) //pass values in fun login


      navigate("/");

      
    } catch {
      setError("Failed to log in")

    }

    setLoading(false)
  }
  

  
  return (
    <>
      <div className="center">
      {error && <Alert variant="danger">{error}</Alert>}

        <form  onSubmit={handleSubmit} className="col-12">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              ref={passwordRef}
            />
          </div>
         
          <button type="submit" class="btn btn-primary">
            sugn up
          </button>
          <h5>
          forget <Link to="/forgertpass">forget password</Link><br></br>

          login by phone? <Link to="/phone"> phone</Link><br></br>

          Rigester? <Link to="/Signup">sign up</Link>

          </h5>
        </form>
      </div>
    </>
  );
}
