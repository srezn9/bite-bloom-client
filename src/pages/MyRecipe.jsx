import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyRecipeCard from './MyRecipeCard';

const MyRecipe = () => {
    const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-10-server-gray-beta.vercel.app/my-recipes?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const res = await fetch(`https://assignment-10-server-gray-beta.vercel.app/recipes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setRecipes(recipes.filter((r) => r._id !== id));
      }
    }
  };

//   const handleUpdate = (id, updatedData) => {
//     fetch(`https://your-server.com/recipes/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setRecipes((prev) =>
//           prev.map((r) => (r._id === id ? { ...r, ...updatedData } : r))
//         );
//         setShowModal(false);
//       });
//     }


 return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">My Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <MyRecipeCard
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
            // onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipe;