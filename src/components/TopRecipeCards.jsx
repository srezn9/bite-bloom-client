import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const TopRecipeCards = ({ recipe }) => {
  const { _id, photoURL, title, cuisineType, likeCount } = recipe;

  return (
    <div className="rounded-2xl shadow-md border border-orange-300 bg-gradient-to-br from-orange-100 via-orange-50 to-white p-4 hover:shadow-lg transition">
      <div className="h-48 w-full overflow-hidden rounded-xl mb-3">
        <img
          src={photoURL || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-orange-600 mb-1">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">
        Cuisine: <span className="font-medium">{cuisineType}</span>
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-orange-500">
          <FaHeart className="mr-1" />
          <span className="font-semibold">{likeCount}</span>
        </div>
        <Link to={`/recipes/${_id}`}>
          <button className="px-3 py-1 text-sm rounded-md bg-orange-50 hover:bg-orange-orange-200 text-orange-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipeCards;
