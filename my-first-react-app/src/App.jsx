import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changesNumber, increaseChanges] = useState(0);
  const onButtonClick = (color) => () => {
    if (color != backgroundColor) {
      setBackgroundColor(color);
      increaseChanges(changesNumber + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <div>{changesNumber}</div>
    </div>
  );
}

export default App;
