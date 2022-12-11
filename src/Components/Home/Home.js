import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/B13ye88zZML._SX3000_.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Best selling bluetooth earbuds"
            price={12.8}
            image="https://m.media-amazon.com/images/I/31ZrpTcmcNL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="MSI 16gb ram Amd RTX 1860"
            price={399.0}
            image="https://m.media-amazon.com/images/I/41uGARZtgFL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Apple Watch Series 3 (GPS, 38MM) - Silver Aluminum Case with White Sport Band (Renewed)"
            price={159.99}
            image="https://m.media-amazon.com/images/I/71UJtA8cFJL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="41098920"
            title="JBL Charge 4 Waterproof Wireless Bluetooth Speaker Bundle with Portable Hard Case - Blue"
            price={118.79}
            image="https://m.media-amazon.com/images/I/81IoRGCyfgL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="75879863"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
            price={299.0}
            image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="Gautam Buddha Marble Statue"
            price={80}
            image="https://m.media-amazon.com/images/I/71kQbM2C1jL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
