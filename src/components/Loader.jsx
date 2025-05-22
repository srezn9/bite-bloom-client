import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full bg-orange-600 animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
