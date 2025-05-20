import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router"; // ✅ fixed router import
import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/AuthContext";
// import { auth } from "../firebase.init";
// import { updatePassword } from "firebase/auth";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // const handleForgotPassword = async () => {
  //   const email = prompt("Enter your email:");
  //   if (!email) return toast.error("Email is required!");

  //   const currentPassword = prompt("Enter your current password:");
  //   if (!currentPassword) return toast.error("Current password is required!");

  //   const newPassword = prompt("Enter your new password:");
  //   if (!newPassword) return toast.error("New password is required!");

  //   try {
  //     await login(email, currentPassword);
  //     await updatePassword(auth.currentUser, newPassword);
  //     toast.success("Password updated successfully!");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-12">
      {/* <Helmet>
        <title>Login - BiteBloom</title>
      </Helmet> */}

      <h2 className="text-center p-5 text-3xl font-bold text-orange-950">
        Login Now
      </h2>

      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-orange-950">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Email"
            required
          />

          <label className="label text-orange-950">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Password"
            required
          />

          <div>
            <button
              type="button"
              // onClick={handleForgotPassword}
              className="link link-hover text-orange-700"
            >
              Forgot password?
            </button>
          </div>

          <button
            className="btn bg-orange-600 hover:bg-orange-700 text-white mt-4"
            type="submit"
          >
            Login
          </button>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn border mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="pt-5 text-center text-orange-950">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-600 underline">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
