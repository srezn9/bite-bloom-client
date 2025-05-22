import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import MyRecipeCard from "./MyRecipeCard";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const MyRecipe = () => {
  const { user, loading } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://assignment-10-server-gray-beta.vercel.app/my-recipes?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [user]);

  if (loading || !user) return <Loader />;

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://assignment-10-server-gray-beta.vercel.app/recipes/${id}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          setRecipes(recipes.filter((r) => r._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your recipe has been removed.",
            icon: "success",
            confirmButtonColor: "#f97316", // Tailwind orange-500
          });
        }
      }
    });
  };

  const handleUpdate = (id, updatedData) => {
    fetch(`https://assignment-10-server-gray-beta.vercel.app/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        setRecipes((prev) =>
          prev.map((r) => (r._id === id ? { ...r, ...updatedData } : r))
        );
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Your recipe has been updated successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">My Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <MyRecipeCard
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipe;
