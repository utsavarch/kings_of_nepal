import React, { useState } from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Popup from "./components/Popup.jsx";
import kings from "./data.js";

function App() {
  const [selectedKing, setSelectedKing] = useState(null);

  const handleCardClick = (king) => {
    setSelectedKing(king);
  };

  const closePopup = () => {
    setSelectedKing(null);
  };

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {kings.map((king, index) => (
          <Card key={index} king={king} onClick={() => handleCardClick(king)} />
        ))}
      </div>
      <div className="text-center border-t border-gray-400 mt-5">
        <span>
          Content From:{" "}
          <a
            href="https://itihasaa.com/"
            target="_blank"
            className="text-blue-500"
          >
            itihasaa.com
          </a>
        </span>
      </div>
      {selectedKing && <Popup king={selectedKing} closePopup={closePopup} />}
    </div>
  );
}

export default App;
