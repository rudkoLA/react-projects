import React from "react";

const Menu = ({ items }) => {
  const a = items.map((item) => {
    const { id, title, img, desc, price } = item;
    return (
      <article key={id} className="menu-item">
        <img src={img} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
  return <div className="section-center">{a}</div>;
};

export default Menu;
