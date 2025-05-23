import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const categories = formData.getAll("categories");
    const newRecipe = {
      ...Object.fromEntries(formData.entries()),
      categories,
      likeCount: 0,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "unknown",
    };

    // sending recipe data to the db
    fetch("https://assignment-10-server-gray-beta.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Recipe added successfully!",
            icon: "success",
            confirmButtonColor: '#f97316',
            draggable: true,
          }).then(() => {
            form.reset();
            navigate("/allRecipes");
          });
        }
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-orange-50 rounded-xl shadow-lg mt-10">
      <Helmet>
        <title>AddRecipe</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        🍊 Add New Recipe
      </h1>
      <form onSubmit={handleAddRecipe} className="space-y-5">
        <div>
          <label className="block text-orange-700 font-semibold">Image</label>
          <input
            type="text"
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            placeholder="Photo URL"
            name="photoURL"
          />
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            placeholder="Delicious Spaghetti"
            name="title"
          />
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">
            Ingredients
          </label>
          <textarea
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            rows="3"
            placeholder="Tomatoes, Basil, Garlic..."
            name="ingredients"
          ></textarea>
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">
            Instructions
          </label>
          <textarea
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            rows="4"
            placeholder="Step-by-step cooking process..."
            name="instructions"
          ></textarea>
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">
            Cuisine Type
          </label>
          <select
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            name="cuisineType"
          >
            <option value="">Select Cuisine</option>
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            className="w-full border border-orange-300 rounded-md p-2 bg-white"
            placeholder="30"
            name="preparationTime"
          />
        </div>

        <div>
          <label className="block text-orange-700 font-semibold mb-2">
            Categories
          </label>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label
                key={cat}
                className="text-orange-700 flex items-center gap-2"
              >
                <input type="checkbox" name="categories" value={cat} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-orange-700 font-semibold">
            Like Count
          </label>
          <input
            type="number"
            value="0"
            readOnly
            className="w-full border border-orange-300 rounded-md p-2 bg-orange-100 text-gray-600"
            name="likeCount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
          value="Add Recipe"
        >
          ➕ Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
