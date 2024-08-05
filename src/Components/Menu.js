/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const Menu = ({ allMenues }) => {
  return (
    <div className="section-center">
      {allMenues.map((product) => (
        <article key={product.id} className="menu-item">
          <img src={product.img} className="photo" />
          <div className="item-info">
            <header>
              <h4>{product.title}</h4>
              <h4 className="price">{product.price}</h4>
            </header>
            <p className="item-text">{product.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
