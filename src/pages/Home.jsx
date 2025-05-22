import React from "react";
import Banner from "../components/Banner";

import ReviewSection from "../components/ReviewSection";
import RestaurantShowcase from "../components/RestaurantShowcase";
import TopRecipeCards from "../components/TopRecipeCards";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div className="max-w-11/12 mx-auto">
      <section className="my-16">
        <Banner></Banner>
      </section>
      <section className="my-16 ">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Top Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRecipes.map((recipe) => (
            <TopRecipeCards key={recipe._id} recipe={recipe} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link to="/allRecipes">
            <button className="px-5 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg font-medium shadow-md hover:scale-105 transition">
              See All Recipes
            </button>
          </Link>
        </div>
      </section>
      <section className="my-16">
        <RestaurantShowcase></RestaurantShowcase>
      </section>
      <section className="my-16">
        <ReviewSection></ReviewSection>
      </section>
    </div>
  );
};

export default Home;
