import React, { useState } from "react";

function ClickablePicture(props) {
  const { image, imgClicked } = props;
  const [image2, setImage] = useState(false);

  return (
    <div>
      <img
        className="click"
        alt=""
        src={!image2 ? image : imgClicked}
        onClick={() => {
          setImage((prevValue) => !prevValue);
        }}
        style={{ height: 100, width: 100 }}
      ></img>
    </div>
  );
}

export default ClickablePicture;
