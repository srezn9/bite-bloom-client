import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const [liked, setLiked] = useState(false);

  const {
    title,
    ingredients,
    instructions,
    photoURL,
    preparationTime,
    // categories,
    userName,
  } = recipe;



  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-orange-50 rounded-2xl shadow-lg">
      <Fade cascade>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={photoURL}
            alt={title}
            className="rounded-xl shadow-md w-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-3">{title}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Chef:</span> {userName}
            </p>
            {/* <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {categories}
            </p> */}
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Cooking Time:</span>{" "}
              {preparationTime} min
            </p>
            {/* <p className="text-gray-700 mb-4">{description}</p> */}

            <button
              onClick={() => setLiked(!liked)}
              className={`text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 ${
                liked ? "bg-red-600" : "bg-orange-500"
              } transition duration-300`}
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-3">
            Ingredients
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-3">
            Steps
          </h3>
          <p className="list-decimal list-inside space-y-2 text-gray-700">
            {instructions}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default RecipeDetails;
