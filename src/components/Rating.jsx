import React from "react";

function Rating(props) {
  let greeting = "";

  switch (props.children) {
    case 1:
      greeting = "Hallo";
      break;
    case 2:
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      break;
  }
  return (
    <div>
      <p>{greeting} </p>
    </div>
  );
}

export default Rating;
