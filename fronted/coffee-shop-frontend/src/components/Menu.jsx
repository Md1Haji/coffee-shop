// File: /src/components/Menu.jsx
import React from "react";

const Menu = () => {
  const menuItems = [
    { image: "cofee9.jpg", name: "Classic Espresso", price: 3.50, originalPrice: 4.00 },
    { image: "cofee1.jpg", name: "Creamy Cappuccino", price: 4.75, originalPrice: 5.25 },
    { image: "cofee6.jpg", name: "Vanilla Latte", price: 5.25, originalPrice: 6.00 },
    { image: "cofee8.jpg", name: "Bold Americano", price: 3.75, originalPrice: 4.50 },
    { image: "cofee2.jpg", name: "Chocolate Mocha", price: 5.50, originalPrice: 6.25 },
    { image: "cofee10.jpg", name: "Caramel Macchiato", price: 5.75, originalPrice: 6.50 },
    { image: "cofee11.jpg", name: "Smooth Flat White", price: 4.95, originalPrice: 5.50 },
    { image: "cofee12.jpg", name: "Irish Coffee", price: 7.25, originalPrice: 8.00 }
  ];

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        Our Signature <span>Menu</span>
      </h1>
      <div className="box-container">
        {menuItems.map((item, index) => (
          <div className="box" key={index}>
            <img src={`/images/${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price">
              ${item.price} <span>${item.originalPrice}</span>
            </div>
            <a href="#" className="btn">Add to Cart</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;