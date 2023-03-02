import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import Pallette from "./components/Pallette";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	const [savedPallets, setSavedPallets] = useLocalStorage("pallettes", []);

	function addNewColorPallette(newPalletteFromInput) {
		let newPallette = [...savedPallets, newPalletteFromInput];
		setSavedPallets(newPallette);
	}
	return (
		<>
			<nav className="bg-gray-200 p-2">
				<h1 className="text-3xl font-bold text-center">
					Color Pallette Builder
				</h1>
			</nav>
			<main className="p-2">
				<ColorPicker addNewColorPallette={addNewColorPallette} />
			</main>
			<section className="p-2 ">
				<span className="font-bold text-xl mb-2">
					My Pallettes ({savedPallets.length})
				</span>
				<hr></hr>
				<div className="mt-5 flex flex-row gap-5 flex-wrap items-center justify-around">
					{savedPallets.map((colorsArray, index) => {
						return (
							<Pallette colorsArray={colorsArray} key={index} />
						);
					})}
				</div>
			</section>
		</>
	);
}

export default App;
