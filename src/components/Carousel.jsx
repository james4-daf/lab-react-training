import React, { useState } from "react";

function Carousel(props) {
  const { images } = props;
  let [imageIndex, setImageIndex] = useState(0);

  function increase() {
    if (imageIndex <= 2) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  function decrease() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(3);
    }
  }

  return (
    <div>
      <button onClick={decrease}>Left</button>
      <img src={images[imageIndex]} alt="carousel" />

      <button onClick={increase}>Right</button>
    </div>
  );
}

export default Carousel;
