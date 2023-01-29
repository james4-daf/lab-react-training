import React from "react";

function NumbersTable({ limit }) {
  let newArr = [];
  for (let i = 1; i <= limit; i++) {
    newArr.push(i);
  }

  return (
    <ul className="numbersTable">
      {newArr.slice(0, limit + 1).map((number) =>
        number % 2 === 0 ? (
          <li className="red" key={number}>
            {number}
          </li>
        ) : (
          <li key={number}>{number}</li>
        )
      )}
    </ul>
  );
}

export default NumbersTable;
