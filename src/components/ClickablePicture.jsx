import React, { useState } from "react";

function ClickablePicture(props) {
  const { image, imgClicked } = props;

  const [image2, setImage] = useState(false);

  function handleClick() {
    if (!image2) {
      setImage(true);
    } else {
      setImage(false);
    }
  }

  return (
    <div>
      <img
        alt=""
        src={!image2 ? image : imgClicked}
        onClick={handleClick}
        style={{ height: 100, width: 100 }}
      ></img>
    </div>
  );
}

export default ClickablePicture;
