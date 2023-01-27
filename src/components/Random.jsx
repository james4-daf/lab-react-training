import React from "react";

function Random(props) {
  const { min, max } = props;
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <p>
        Random value between {min} and {max} =&gt; {value}
      </p>
    </div>
  );
}

export default Random;
