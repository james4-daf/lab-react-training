import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("blue");
  const colours = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <div>
      <button
        style={{ background: colour }}
        onClick={() => {
          setCount(count + 1);
          setColour(colours[Math.floor(Math.random() * colours.length)]);
        }}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
