import React, { useState ,useContext } from "react"

import "../App.css";
import { useAuth  } from "../components/auth/usecontext"
import { useNavigate,Link } from "react-router-dom";
import i18n from "i18next";


import { useTranslation } from "react-i18next";

export default function Navbar() {
  const handeleng = () => {
    if (i18n.changeLanguage('ar')) {
    



  console.log('done')


    }



  }

  const [t, i18n] = useTranslation()

  const navigate = useNavigate();
  const [error, setError] = useState("")


  const {  logout ,currentUser ,handelarabic } = useAuth()
//fun background color
const colorbg = ()=>{
  document.body.style.backgroundColor = 'white'
  document.getElementById('dark').style.display = "block";
  document.getElementById('whitee').style.display = "none";


}
//fun background color

const colorbg_ = ()=>{
  document.body.style.backgroundColor = '#C71585  '
  document.getElementById('whitee').style.display = "block";
  document.getElementById('dark').style.display = "none";


}
  

  async function handleLogout() {
    setError("")

    try {
      await logout()

      navigate("sign_in")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return (
    <>
     <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a  class="navbar-brand" href="/">{t('Boutique')}</a>
    <button id="whitee" className="btn btn-light " onClick={colorbg} >bg white</button>
    <button  id="dark" className="btn btn-dark " onClick={colorbg_} >bg dark</button>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
 
        <li class="nav-item">
        {currentUser ? <a onClick={handleLogout} class="nav-link" href="#">Log out</a>: ''}
          
        </li>
        <li class="nav-item linkkss ">
          <Link  class="nav-link" to='/Signup'>register</Link>
        </li>
        <li class="nav-item linkkss ">
          <Link  class="nav-link" to='/sign_in'>login</Link>
        </li>
        <li class="nav-item linkkss ">
         <a onClick={handeleng} class="nav-link" href="#">عربي</a>
        </li>
        <li class="nav-item linkkss ">
          <a  class="nav-link" href="#">{currentUser ? currentUser.email: ''}</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
