import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen relative flex items-center justify-center text-center px-4 bg-black">
      <img
        src="https://i.ibb.co/PZq8zC4t/6054026.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* dark overlay */}
      <div className="relative z-10 text-white max-w-lg">
        <h1 className="text-5xl font-extrabold text-orange-500 drop-shadow-lg mb-4">
          🍽️ Oops!
        </h1>
        <div className="">
          <p className="text-xl text-gray-200 mb-2">
          We couldn’t find the recipe you're looking for.
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Maybe it's cooking somewhere else...
        </p>
        </div>
        <Link
          to="/"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition font-semibold shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
