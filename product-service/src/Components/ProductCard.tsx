import React from "react";
import {Product} from "../Types/Product";

export default function ProductCard({name = 'Unknown'}: Product) {
	return (
		<div>
			{name}
		</div>
	);
}