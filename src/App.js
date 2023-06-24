import React from "react";
import ColorPalette from "./Colorpalette";

const colors = ["red", "green", "blue", "yellow", "pink"];

const App = () => {
  const handleColorSelect = (color) => {
    console.log("Selected color:", color);
  };

  return (
    <div>
      <h1>Color Palette</h1>
      <ColorPalette colors={colors} onColorSelect={handleColorSelect} />
    </div>
  );
};

export default App;
