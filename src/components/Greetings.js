import React from "react";

function Greetings(props) {
  const { lang } = props;
  let space = " ";
  let greeting = "";

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
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
      <p>
        {greeting} {space}
        {props.children}
      </p>
    </div>
  );
}

export default Greetings;
