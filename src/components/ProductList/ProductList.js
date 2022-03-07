import "./ProductList.css";

import React from 'react'
import Product from "../Product/Product";
import {products} from "../../data"

const ProductList = () => {
  return (
      <div className="pl">
          <div className="pl-texts">
              <h1 className="pl-title">
              Mine projekter
              </h1>
              <p className="pl-desc">
              Herunder kan man se en række af de projekter jeg har arbejdet på for nylig.
              </p>
          </div>
          <div className="pl-list">
              {products.map(item => ( 
                  <Product key={item.id} img={item.img} link={item.link}/>
              ))}
          </div>
    </div>
  )
}

export default ProductList