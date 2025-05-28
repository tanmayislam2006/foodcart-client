import React, { use } from "react";
import Logo from "../../assets/food-cart.png";
import { FcGoogle } from "react-icons/fc";
import FoodCartContext from "../../Context/FoodCartContext";

const Login = () => {
  const { googleLogin } = use(FoodCartContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => console.log(res.user))
      .then((err) => console.log(err));
  };
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-primary/5 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <img
          src={Logo}
          alt="Food Cart Logo"
          className="w-20 h-20 mb-6 rounded-full border-4 border-primary/20 bg-white object-contain"
        />
        <h2 className="text-2xl font-bold text-primary mb-6">
          Login to Foodied
        </h2>
        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary cursor-pointer text-white font-bold py-3 rounded-lg mt-2"
          >
            Login
          </button>
        </form>
        <div className="my-4 w-full flex items-center">
          <div className="flex-1 h-px bg-primary/20"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-primary/20"></div>
        </div>
        <button 
        onClick={handleGoogleLogin}
        className="w-full cursor-pointer flex items-center justify-center gap-3 border border-primary/30 py-3 rounded-lg font-semibold text-primary bg-white">
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
        <p className="mt-6 text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-primary font-semibold">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
