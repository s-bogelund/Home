import "./ProductList.css";

import React from "react";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">Mine Projekter</h1>
				<p className="pl-desc">
					Herunder kan man se en række af de projekter, jeg har arbejdet på for
					nylig. <br />
					Klik på vinduet for at gå til hjemmesiden.
				</p>
			</div>
			<div className="pl-list">
				{products.map((item) => (
					<Product
						key={item.id}
						img={item.img}
						link={item.link}
						desc={item.desc}
						title={item.title}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
