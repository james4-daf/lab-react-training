import React from "react";

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div className="card">
      <p>
        <strong>First name</strong>: {firstName}
      </p>
      <p>
        <strong>Last name</strong>: {lastName}
      </p>
      <p>
        <strong>Gender</strong>: {gender}
      </p>
      <p>
        <strong>Last name</strong>: {height}
      </p>
      <p>
        <strong>Last name</strong>: {birth}
      </p>
      <img alt="id" src={picture} />
    </div>
  );
}

export default IdCard;
