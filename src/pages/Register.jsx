import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router"; 
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { register, updateUserProfile, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      title,
      showConfirmButton: false,
      timer: 3000,
      background: "#ea580c",
      color: "#fff",
      iconColor: "#fff",
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);

    if (!uppercase || !lowercase || password.length < 6) {
      return showToast(
        "error",
        "Password must have uppercase, lowercase and at least 6 characters."
      );
    }

    register(email, password)
      .then(() => {
        updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        });
        showToast("success", "Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        showToast("error", error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        showToast("success", "Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        showToast("error", error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-12">
      <Helmet>
        <title>Register - BiteBloom</title>
      </Helmet>
      <h2 className="text-center p-5 text-3xl font-bold text-orange-950">
        Register Now
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-orange-950">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Your name"
            required
          />

          <label className="label text-orange-950">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input input-bordered"
            placeholder="Photo URL"
            required
          />

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

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-orange-950">
              I accept the{" "}
              <Link to="/terms" className="text-orange-600 underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            className="btn bg-orange-600 hover:bg-orange-700 text-white mt-4"
            type="submit"
            disabled={!accepted}
          >
            Register
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
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 underline">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
