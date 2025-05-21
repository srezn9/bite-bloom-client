import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import AllRecipes from "./pages/AllRecipes.jsx";
import Loader from "./components/Loader.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addRecipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/allRecipes",
        loader: () =>
          fetch("https://assignment-10-server-gray-beta.vercel.app/recipes"),
        element: <AllRecipes></AllRecipes>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/recipes/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-gray-beta.vercel.app/recipes/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
