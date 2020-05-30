import React from "react";
import "./card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} alt="nasa photo of the day" />
    </div>
  );
};
export default Card;
