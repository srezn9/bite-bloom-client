import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const { _id, title, userName, photoURL, categories } = recipe;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 border border-gray-200 hover:shadow-xl transition duration-300">
      {photoURL && (
        <img
          src={photoURL}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h2 className="text-xl font-bold text-orange-600 mb-2">{title}</h2>

      <p className="text-sm text-gray-700 mb-1">
        <span className="font-semibold text-gray-900">Author:</span> {userName}
      </p>

      {categories?.length > 0 && (
        <p className="text-sm text-gray-700 mb-3">
          <span className="font-semibold text-gray-900">Category:</span>{" "}
          {categories.join(", ")}
        </p>
      )}

      <Link to={`/recipes/${_id}`}>
        <button className="border-2 border-orange-600 hover:bg-orange-100 text-orange-600 px-4 py-2 rounded-lg transition duration-200 w-full font-medium">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
