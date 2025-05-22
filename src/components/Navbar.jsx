import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 3000,
          background: "#ea580c",
          color: "#fff",
          iconColor: "#fff",
        });
      })
      .catch((error) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: error.message || "Logout failed",
          showConfirmButton: false,
          timer: 3000,
          background: "#ea580c",
          color: "#fff",
          iconColor: "#fff",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline text-orange-600 font-semibold"
              : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allRecipes"
          className={({ isActive }) =>
            isActive
              ? "underline text-orange-600 font-semibold"
              : "font-semibold"
          }
        >
          All Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addRecipe"
          className={({ isActive }) =>
            isActive
              ? "underline text-orange-600 font-semibold"
              : "font-semibold"
          }
        >
          Add Recipe
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myRecipe"
          className={({ isActive }) =>
            isActive
              ? "underline text-orange-600 font-semibold"
              : "font-semibold"
          }
        >
          My Recipe
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-15 h-15 rounded-4xl"
            src="https://i.postimg.cc/zBZSg959/recipee.jpg"
            alt="BiteBloom Logo"
          />
          <h2 className="text-xl font-bold text-orange-900">
            Bite<span className="text-orange-600">Bloom</span>
          </h2>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-5">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold">{user.displayName}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-orange-900 text-white w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn bg-orange-800 text-white">
              Login
            </Link>
            <Link to="/register" className="btn bg-orange-700 text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
