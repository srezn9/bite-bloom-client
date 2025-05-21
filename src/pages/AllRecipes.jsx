import React from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";


const AllRecipes = () => {
  const recipes = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <h1 className="text-3xl font-bold text-orange-700 mb-8 text-center">
        All Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
