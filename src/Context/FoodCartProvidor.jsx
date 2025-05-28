import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import auth from "../Firebase/firebase.init.js";
import FoodCartContext from "./FoodCartContext.jsx";
const GreenProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [refresh,setRefresh]=useState(false)
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading("true");
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (firebaseUser?.uid) {
      fetch(
        `https://green-connect-server.onrender.com/user/${firebaseUser.uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    } else {
      setUser(null);
    }
  }, [firebaseUser,refresh]);
  const sharedData = {
    firebaseUser,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    googleLogin,
    loginUser,
    setFirebaseUser,
    createAccount,
    logoutUser,
    user,
    refresh,
    setRefresh
  };
  return <FoodCartContext value={sharedData}>{children}</FoodCartContext>;
};

export default GreenProvider;
