import React, { use } from "react";
import FoodCartContext from "../Context/FoodCartContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { firebaseUser, loading } = use(FoodCartContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-center">Data is Loading</h1>;
  }
  if (!firebaseUser) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRouter;
