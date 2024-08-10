import React, { useEffect } from "react";
import { useState } from "react";
import "../../App.css"

function Shop() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => SetData(res.products));
  }, []);
  return (
    <div className="home">
      {data.map((e) => {
        return (
          <div key={e.id} className="box">
            <img src={e.images[0]} alt=""  className="pictures"/>
            <h2 className="title">{e.title}</h2>
            <p>{e.brand}</p>
            <p>{e.category}</p>
            <p>{e.description}</p>
            <p>{e.price} $</p>
            <button className="add-button">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
