import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const RecipeDetails = () => {
  const { user } = useContext(AuthContext);
  const recipe = useLoaderData();
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (recipe?.likeCount) {
      setLikeCount(parseInt(recipe.likeCount));
    }
  }, [recipe]);

  if (!recipe) {
    return <Loader />;
  }

  const {
    title,
    ingredients,
    instructions,
    photoURL,
    categories,
    preparationTime,
    userName,
    userEmail,
    _id,
  } = recipe;

  const handleLike = async () => {
    if (user?.email === userEmail) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "You cannot like your own recipe!",
      });
      return;
    }

    
    setLikeCount((prev) => prev + 1);

    try {
      await fetch(
        `https://assignment-10-server-gray-beta.vercel.app/recipes/${_id}/like`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Failed to update like count", error);
      setLikeCount((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-orange-50 rounded-2xl shadow-lg">
      <Helmet>
        <title>RecipeDetails || BiteBloom</title>
      </Helmet>
      <p className="text-orange-500 font-medium text-lg mb-6 text-center">
        <span className="text-orange-900 font-semibold">{likeCount} people</span> interested in this recipe
      </p>

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
            {categories && categories.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="font-semibold text-gray-700">Categories:</span>
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-orange-200 text-orange-800 text-sm px-2 py-1 rounded-full shadow"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Cooking Time:</span>{" "}
              {preparationTime} minutes
            </p>

            <button
              onClick={handleLike}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 transition duration-300 hover:bg-orange-600"
            >
              <FaRegHeart />
              Like
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
          <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
        </div>
      </Fade>
    </div>
  );
};

export default RecipeDetails;
