export function generateRandomColors(count) {
	const array = [];
	let subString = "";
	let hexVal = "";
	for (let i = 0; i < count; i++) {
		subString = "#";
		for (let j = 0; j < 3; j++) {
			hexVal = Math.floor(Math.random() * 255).toString(16);
			hexVal.length == 2
				? false
				: console.log("found the bug, hell yeah!");

			// here the bug is that if the decimal number from the random lies between 0 - 15 only a single hexadecimal character is generated which makes the color code generated to only 5 letters instead of 6, so we'll be adding `0` in front when a single hexadecimal character is generated
			subString += hexVal.length == 2 ? hexVal : "0" + hexVal;
		}
		array.push(subString);
	}

	return array;
}
