// import { Link } from "react-router";
// import { Fade } from "react-awesome-reveal";
// import { FaUserAlt, FaStar } from "react-icons/fa";
// import { CiClock2 } from "react-icons/ci";

// const AllRecipes = ({ recipes }) => {
//   return (
//     <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-10 text-orange-700">
//         All Recipes
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {recipes.map((recipe) => (
//           <Fade key={recipe.id} triggerOnce direction="up" cascade>
//             <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//               <img
//                 src={recipe.image}
//                 alt={recipe.title}
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-4 space-y-2">
//                 <h2 className="text-xl font-semibold text-orange-700">
//                   {recipe.title}
//                 </h2>

//                 <div className="text-sm text-gray-600 flex items-center gap-2">
//                   <FaUserAlt className="text-orange-500" />
//                   {recipe.chef}
//                 </div>

//                 <div className="text-sm text-gray-600 flex items-center gap-2">
//                   <CiClock2 className="text-orange-500" />
//                   {recipe.cookTime} mins
//                 </div>

//                 <div className="text-sm text-gray-600 flex items-center gap-2">
//                   <FaStar className="text-yellow-500" />
//                   {recipe.rating}
//                 </div>

//                 <Link
//                   to={`/recipes/${recipe.id}`}
//                   className="inline-block mt-3 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600"
//                 >
//                   See Details
//                 </Link>
//               </div>
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllRecipes;
