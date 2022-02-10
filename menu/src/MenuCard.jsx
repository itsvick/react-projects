import React from "react";

export default function MenuCard(props) {
  const { title, price, img, desc } = props.item;

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h4>
          {title} <span className="price">${price}</span>
        </h4>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
