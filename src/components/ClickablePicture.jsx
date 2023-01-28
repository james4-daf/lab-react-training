import React from "react";

function ClickablePicture() {
  let imag2 = "https://randomuser.me/api/portraits/women/1.jpg";
  return (
    <div>
      <img alt="" src={imag2} style={{ height: 100, width: 100 }}></img>
    </div>
  );
}

export default ClickablePicture;
