import React from "react";
import {Product} from "../Types/Product";
import ProductCard from "./ProductCard";

const data: Product[] = [
	{
		id: 1,
		name: 'Product Name 1',
		price: 199,
		discount: 159,
		brand: 'Brand',
		image: 'https://source.unsplash.com/yryt6Hwl52U'
	},
	{
		id: 2,
		name: 'Product Name 2',
		price: 199,
		discount: 159,
		brand: 'Brand',
		image: 'https://source.unsplash.com/FV_PxCqgtwc'
	},
	{
		id: 3,
		name: 'Product Name 3',
		price: 199,
		discount: 159,
		brand: 'Brand',
		image: 'https://source.unsplash.com/hX_hf2lPpUU'
	}];

export default function ProductRecommendations() {
	return (
		<section id="Products">
			<div
				className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
				{data.map(product => <ProductCard {...product}/>)}
			</div>
		</section>
	);
}