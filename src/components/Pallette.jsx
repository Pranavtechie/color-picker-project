import React from "react";

export default function Pallette({ colorsArray }) {
	console.log(colorsArray);
	return (
		<div className="border rounded-md border-gray-200 border-l-2 flex max-w-fit gap-2 p-2 min-w-min bg-gray-100">
			{colorsArray.map((hexCode, index) => {
				return (
					<span
						key={index}
						className={"px-8 py-8 rounded-md"}
						style={{ backgroundColor: `${hexCode}` }}
					>
						&nbsp;
					</span>
				);
			})}
		</div>
	);
}
