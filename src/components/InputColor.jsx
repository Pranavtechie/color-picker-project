import React, { useState } from "react";

export default function InputColor(props) {
	const [colorInput, setColorInput] = useState(props.color);

	return (
		<span className="group relative ">
			<input
				type="color"
				className="color rounded-md flex-1 w-32 h-48 z-0 group-hover:opacity-30"
				value={`${colorInput}`}
				id={`${colorInput}`}
				onChange={(e) => {
					props.handleNewColor(props.index, e.target.value);
					setColorInput(e.target.value);
				}}
			/>
			<p
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 font-bold text-gray-900"
				htmlFor={`${colorInput}`}
			>
				{colorInput}
			</p>
		</span>
	);
}
