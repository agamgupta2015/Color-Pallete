import React, { useState } from "react";

const ColorPalette = ({ colors, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      setSelectedColor(null);
      onColorSelect(null);
    } else {
      setSelectedColor(color);
      onColorSelect(color);
    }
  };

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            display: "inline-grid",
            width: "50px",
            height: "50px",
            backgroundColor: color,
            border: selectedColor === color ? "5px solid black" : "none",
            margin: "5px",
            cursor: "pointer"
          }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
