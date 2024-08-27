import React from "react";

function Hero() {
  return (
    <div className="h-[70vh] w-[100vw] bg-[url('./img/hero.png')] bg-top bg-cover flex flex-col items-center justify-center text-center">
      <div className="sm:h-[200px] sm:w-[500px] h-[150px] w-[250px] flex items-center justify-center mb-4">
        <img
          src="https://github.com/utsavarch/kings_of_nepal/blob/main/src/img/hero.png?raw=true"
          className="h-full w-full object-contain"
        ></img>
      </div>
      <h1 className="text-[40px] sm:text-[80px] font-extrabold text-[#f8fafc] ">
        Kings of Nepal
      </h1>
    </div>
  );
}

export default Hero;
