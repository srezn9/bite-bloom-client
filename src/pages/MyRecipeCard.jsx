import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyRecipeCard = ({ recipe, onDelete, onUpdate }) => {
  const {
    _id,
    photoURL,
    title,
    ingredients,
    instructions,
    cuisineType,
    preparationTime,
    categories,
    likeCount,
  } = recipe;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ ...recipe });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...safeData } = formData;
    await onUpdate(recipe._id, safeData);
    setIsModalOpen(false);
  };

  return (
    <div className="border border-orange-600 border-dotted rounded-xl p-4 shadow-md bg-white">
      <img
        src={photoURL || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-3 text-orange-600">{title}</h3>
      <p>
        <strong>Ingredients:</strong> {ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {instructions}
      </p>
      <p>
        <strong>Cuisine Type:</strong> {cuisineType}
      </p>
      <p>
        <strong>Prep Time:</strong> {preparationTime} mins
      </p>
      <p>
        <strong>Category:</strong> {categories?.join(", ")}
      </p>
      <p>
        <strong>Likes:</strong> {likeCount}
      </p>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <FaEdit /> Update
        </button>
        <button
          onClick={() => onDelete(recipe._id)}
          className="text-red-600 hover:text-red-800 flex items-center gap-1"
        >
          <FaTrash /> Delete
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Update Recipe</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="input w-full"
              />
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Image URL"
                className="input w-full"
              />
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                className="input w-full"
              />
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Instructions"
                className="input w-full"
              />
              <input
                type="text"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                placeholder="Cuisine Type"
                className="input w-full"
              />
              <input
                type="text"
                name="preparationTime"
                value={formData.preparationTime}
                onChange={handleChange}
                placeholder="Preparation Time"
                className="input w-full"
              />
              <input
                type="text"
                name="categories"
                value={formData.categories}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    categories: e.target.value.split(","),
                  }))
                }
                placeholder="Categories (comma separated)"
                className="input w-full"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipeCard;
