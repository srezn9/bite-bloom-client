import React from "react";

const RestaurantShowcase = () => {
  const restaurants = [
    {
      name: "Urban Flavors",
      location: "New York, USA",
      description:
        "A modern fusion kitchen bringing global taste to your plate.",
      image:
        "https://i.postimg.cc/qRfz4YKR/restaurant-interior.jpg",
    },
    {
      name: "Spice Symphony",
      location: "Delhi, India",
      description:
        "Authentic Indian dishes with a modern twist and cozy vibes.",
      image:
        "https://i.postimg.cc/qvTrBTbW/restaurant-interior-1.jpg",
    },
    {
      name: "The Green Fork",
      location: "Portland, USA",
      description: "Farm-to-table meals made fresh with organic ingredients.",
      image:
        "https://i.postimg.cc/TP2XmcX9/happy-waiter-serving-food-group-cheerful-friends-pub.jpg",
    },
    {
      name: "Bella Bites",
      location: "Rome, Italy",
      description: "Traditional Italian family recipes served with love.",
      image:
        "https://i.postimg.cc/CK9fd53w/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg",
    },
  ];

  return (
    <div className="py-16 px-4 bg-base-200">
      <h2 className="text-4xl text-orange-600 font-bold p-4 mb-8">
        Restaurants Featured on BiteBloom
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, idx) => (
          <div
            key={idx}
            className="card bg-base-100 image-full w-full shadow-lg border border-orange-200"
          >
            <figure>
              <img src={restaurant.image} alt={restaurant.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-orange-600">{restaurant.name}</h2>
              <p className="text-white">{restaurant.description}</p>
              <div className="card-actions justify-end">
                <div className="px-4 py-2 text-white font-semibold rounded shadow-sm border-1 border-white">
                  {restaurant.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantShowcase;
