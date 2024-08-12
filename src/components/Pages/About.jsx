import React, { useEffect } from "react";
import { useState } from "react";
import "../../App.css"

function About() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then((res) => res.json())
      .then((res) => SetData(res.products));
  }, []);
  return (
    <div className="home1">
      {data.map((e) => {
        return (
          <div key={e.id} className="box1">
            <img src={e.images[0]} alt=""  className="pictures1"/>
            <h2 className="title1">{e.title}</h2>
            <p>{e.brand}</p>
            <p>{e.category}</p>
            <p>{e.description}</p>
            <p>{e.price} $</p>
            <button className="add-button1">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default About;
