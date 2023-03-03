import React, { useState } from "react";
import { generateRandomColors } from "../utils";
import InputColor from "./InputColor";

export default function ColorPicker({
	addNewColorPallette,
	colorPickerColors: colors,
	setColorPickerColors: setColors,
}) {
	function handleNewColor(index, color) {
		let newColors = [...colors];
		newColors[index]["color"] = color;
		setColors(newColors);
	}

	return (
		<div className="px-2 py-3 border-2 border-gray-300 shadow-md rounded-md min-w-fit mx-8 mt-16">
			<div className="flex gap-3 justify-center items-center">
				{colors.map(({ id, color }, index) => {
					return (
						<InputColor
							color={color}
							key={id}
							// nasty react bug found - If I mutate a new array and pass the same array with the same length react for some reason doesn't seem to update the child elements.
							// TODO: find out more about this, if change key={index} the elements won't update
							// key={index}
							// I can't keep the input modal open if I make the key Math.random() as the complete dom will be replaced include the state to change the input value. So, instead we should generate an array of objects for passing the colors along with a custom id generated using uuid
							handleNewColor={handleNewColor}
							index={index}
						/>
					);
				})}
			</div>
			<div className="mt-3 flex gap-7 items-center justify-center">
				<button
					className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => setColors(generateRandomColors(5))}
				>
					Generate Random
				</button>
				<button
					className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						addNewColorPallette(colors);
						setColors(generateRandomColors(5));
					}}
				>
					Save Pallette
				</button>
			</div>
		</div>
	);
}
