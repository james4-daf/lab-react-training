import React from "react";
import "./App.css";
import clickedImgfrom from "./assets/images/maxence-glasses.png";
import img1 from "./assets/images/maxence.png";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      {/* <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={6} /> */}
      {/* <LikeButton /> */}

      {/* <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      /> */}
      <ClickablePicture image={img1} imgClicked={clickedImgfrom} />

      {/* <NumbersTable limit={54} />
      <Rating>2</Rating>
      <Counter /> */}
    </div>
  );
}

export default App;
