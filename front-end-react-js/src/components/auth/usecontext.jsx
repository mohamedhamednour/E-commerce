import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";




const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {


  const translationsEn = {
    Boutique: "Boutique!",



  };

  const translationsAR = {
    Boutique: "!بوتيك"





  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: translationsEn },
        ar: { translation: translationsAR },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });


  const handeleng = () => {
    if (i18n.changeLanguage('en')) {
    



  console.log('done')


    }



  }
  // functions arabic

  const handelarabic = () => {
    if (i18n.changeLanguage('ar')) {
      // hidde and toggle buttons arabic and english
      document.getElementById('navarabic').style.display = "none";

      document.getElementById('navEng').style.display = "block";
      document.getElementById('navbarr').style.direction = 'rtl'








    }



  }



  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}