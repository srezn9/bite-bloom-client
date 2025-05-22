import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ariana Cooks",
    role: "Recipe Developer, BiteBloom",
    image:
      "https://i.postimg.cc/sgKzHWn2/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg",
    text: "BiteBloom has redefined how I share my culinary creations with the world. It's my go-to platform for everything food.",
  },
  {
    name: "Liam Grills",
    role: "Chef, Urban Flavors",
    image:
      "https://i.postimg.cc/2Sq6W2jD/young-bearded-man-with-striped-shirt.jpg",
    text: "I love how simple yet elegant BiteBloom is. It's helped me connect with food lovers across the globe.",
  },
  {
    name: "Maya Spices",
    role: "Food Blogger",
    image:
      "https://i.postimg.cc/Gt7L8sZt/friendly-attractive-african-american-woman-yellow-stylish-sweater-smiling-satisfied-look-confident-c.jpg",
    text: "As a blogger, BiteBloom gave me the visibility and tools to grow my audience and express my passion for food.",
  },
];

const ReviewSection = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Voices of the Community
        </h2>
    
    <div
      className="bg-cover bg-center py-16 px-4"
      style={{
        backgroundImage: `url("https://i.postimg.cc/SK8XzDSP/traditional-ukrainian-russian-borscht-red-soup-bowl-top-view.jpg")`,
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md p-6 rounded-xl text-center shadow-xl"
          >
            <div className="flex justify-center -mt-20 mb-4 relative">
              <div className="w-24 h-24 rounded-full border-2 border-orange-600 shadow-lg bg-white p-1">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ReviewSection;
