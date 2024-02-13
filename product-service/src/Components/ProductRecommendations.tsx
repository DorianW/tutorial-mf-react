import React from "react";
import {Product} from "../Types/Product";
import ProductCard from "./ProductCard";

const data: Product[] = [{
	id: 1,
	name: 'Product Name',
	price: 199,
	discount: 159,
	brand: 'BRAND',
	image: ''
}];

export default function ProductRecommendations() {
	return (
		<div>
			<div>
				Product Recommendations
			</div>
			<div>
				{data.map(product => <ProductCard {...product}/>)}
			</div>
		</div>
	);
}