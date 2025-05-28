import React from "react";
import FoodCartContext from "./FoodCartContext";

const FoodCartProvidor = ({ children }) => {
  const shareInfo = {
    name: "foodCart",
  };
  return <FoodCartContext value={shareInfo}>{children}</FoodCartContext>;
};

export default FoodCartProvidor;
