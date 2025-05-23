import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";
import { Helmet } from "react-helmet-async";

const AllRecipes = () => {
  const recipes = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisineTypes = useMemo(() => {
    const allCuisines = recipes.map(recipe => recipe.cuisineType).filter(Boolean);
    return ["All", ...Array.from(new Set(allCuisines))];
  }, [recipes]);

  const filteredRecipes = selectedCuisine === "All"
    ? recipes
    : recipes.filter(recipe => recipe.cuisineType === selectedCuisine);

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <Helmet>
        <title>AllRecipes || BiteBloom</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-orange-700 mb-8 text-center">
        All Recipes
      </h1>
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCuisine}
          onChange={e => setSelectedCuisine(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {cuisineTypes.map(cuisine => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No recipes found for "{selectedCuisine}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRecipes;
