import React from "react"
import { useAuth } from "./usecontext"


import { Navigate, } from "react-router-dom";
//PrivateRoute if user go on home else go in sign_in

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="sign_in" />;
}