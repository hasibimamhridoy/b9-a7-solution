import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh] rounded-2xl mt-5"
      style={{
        backgroundImage: "url('/banner.png')",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer. Explore Now Our Feedback Our Recipes
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque. Spaghetti Bolognese Classic Italian
            pasta dish with savory meat sauce.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="btn bg-green-500 border-none rounded-3xl px-10">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white border rounded-3xl px-10">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
