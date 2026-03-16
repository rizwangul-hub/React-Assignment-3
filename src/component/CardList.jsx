import React from "react";
import image from "../../public/1736617817873 (1).jpg";
import Mobile from "../../public/Rectangle 1317.png";
import Ux from "../../public/unsplash_E6Vo_4i-3Xg.png";
import "../../src/index.css";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="card-container">
      <Card
        image={image}
        title={"Web Development"}
        description={
          "Learn HTML, CSS, JavaScript and modern frameworks like React"
        }
      />
      <Card
        image={Mobile}
        title={"Mobile Development"}
        description={
          "Build mobile apps using technologies like React Native and Flutter."
        }
      />
      <Card
        image={Ux}
        title={"UI/UX Design"}
        description={
          "Learn how to design beautiful and user-friendly interfaces."
        }
      />
    </div>
  );
};

export default CardList;
