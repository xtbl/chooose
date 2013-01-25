// add event listeners p.74
// add handlers
// add animations (fade out/fade in)
// display messages
// add counter
// manage:
// 	image src
// 	title
// 	description

// what if:
// 	set an array with all data
// 	app starts a sequence based on the data of the array

// example: 
// option_1 = {
// 	title: 'cool shirt',
// 	image_src: 'cool-shirt.jpg',
// 	description: 'Super cool shirt!'
// }
// ...
// option_8 = {
// 	title: 'cool shirt',
// 	image_src: 'cool-shirt.jpg',
// 	description: 'Super cool shirt!'
// }
//console.log(obj[name]);
// iterates through objects with each click


var CHOOO = CHOOO || {};

CHOOO.utils = (function(){
	// private properties
	var counter;

	// public api
	return {
		displayOptions: function () {
			// display options a and b with their properties, including right or wrong
		},
		nextSelection: function () {
			// move to the next pair of options
		},
		isCorrect: function () {
			// establish if selection was right
		},
		displayResult: function () {
			// display result of selection
		},
		finishApp: function () {

		}
	};
}());