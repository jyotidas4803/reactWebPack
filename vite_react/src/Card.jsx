import React from "react";

// imglink, name, description
function Card(props) {
  const { imgLink, name, description } = props;

  return (
    <div className="card">
      <img src={imgLink} alt="" style={{ width: "50px", height:"50px" }} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
// A component is a function that returns some amount of JSX
// Some UI part