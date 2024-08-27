import React from "react";
import "../index.css";

function Popup({ king, closePopup }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-[#f8fafc] p-10 rounded-lg max-w-4xl relative max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button className="absolute top-2 right-2 text-xl" onClick={closePopup}>
          &times;
        </button>
        <img
          src={king.img}
          alt={king.name}
          className="rounded-full mx-auto max-w-[150px] max-h-[150px]"
        />
        <h2 className="font-bold text-center mt-5 text-xl">{king.name}</h2>
        <p className="font-light text-justify mt-5">{king.details}</p>
      </div>
    </div>
  );
}

export default Popup;
