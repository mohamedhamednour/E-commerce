import React, { useState } from "react";
import {  auth } from "../../firebase";
import  firebase from "../../firebase";


const Phone = () => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  // Sent OTP
  
  const signin = (e,t) => {
    e.preventDefault()
    



    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
        this.element.addEventListener(t, e, { passive: true} )

      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form onSubmit={signin}>  
   <div className="center">
      <div style={{ marginTop: "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <input
            class="form-control"

            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="phone number"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button className="btn btn-danger" >Send OTP</button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input 
            class="form-control"
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
        </div>
      </center>
    </div>
   </div>
   </form>
  );
};




export default Phone;
