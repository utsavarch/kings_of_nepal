import React from "react";

function Card({ king, onClick }) {
  return (
    <div
      className="bg-[#f8fafc] m-5 p-5 rounded-[30px] hover:scale-[1.02] shadow-lg shadow-black hover:cursor-pointer flex flex-col justify-center"
      onClick={onClick}
    >
      <img src={king.img} alt={king.name} className="rounded-[100%]" />
      <h2 className="font-bold text-center mt-5">{king.name}</h2>
      <p className="font-light text-justify mt-5">{king.des}</p>
    </div>
  );
}

export default Card;
