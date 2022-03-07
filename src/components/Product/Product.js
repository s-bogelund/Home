import "./Product.css";
import React from "react";
import Card from "../UI/Card";

const Product = ({ img, link, desc, title }) => {
	console.log(desc);
	return (
		<Card className="p-wrap">
			<div className="p">
				<div className="p-browser">
					<div className="p-circle"></div>
					<div className="p-circle"></div>
					<div className="p-circle"></div>
				</div>
				<a href={link} target="_blank">
					<img src={img} alt="" className="p-img" />
				</a>
			</div>
			<Card className="p-description">
				{title}
				{desc}
			</Card>
		</Card>
	);
};

export default Product;
