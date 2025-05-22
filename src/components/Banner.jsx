import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="w-full min-h-[60vh] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white px-4 rounded-2xl mt-4 mb-12 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/dVpppYg7/2206-w032-n003-501b-p1-501.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50  z-0 rounded-2xl"></div>

      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-xl">
          Explore Flavors <br />
          <span className="text-white">
            <Typewriter
              words={[
                "That Bring People Together",
                "That Inspire Joy",
                "That Connect Cultures",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-base md:text-lg px-4 text-gray-200 drop-shadow-md">
          From cozy home-cooked meals to festive favorites,{" "}
          <strong className="text-orange-400">BiteBloom</strong> offers
          handpicked recipes for every craving. Join our vibrant food-loving
          community and cook up memories that last a lifetime. 🍳🍰
        </p>
      </div>
    </div>
  );
};

export default Banner;
