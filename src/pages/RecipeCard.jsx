import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const { _id, title, userName, photoURL, category } = recipe;

  return (
    <div className="bg-orange-50 shadow-lg rounded-xl overflow-hidden p-4 border border-orange-200">
      {photoURL ? (
        <img
          src={photoURL}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : null}

      <h2 className="text-xl font-bold text-orange-700 mb-2">{title}</h2>
      <p className="text-sm text-orange-600 mb-1">Author: {userName}</p>
      <p className="text-sm text-orange-600 mb-3">Category: {category}</p>
      <Link to={`/recipes/${_id}`}>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition duration-200">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
