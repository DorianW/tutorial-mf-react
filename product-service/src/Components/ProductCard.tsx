import React from "react";

type Props = {
	name?: string;
}

export default function ProductCard({name = 'Unknown'}: Props) {
	return (
		<div>
			{name}
		</div>
	);
}