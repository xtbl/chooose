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

	CHOOO = (function(){
	// private properties
	var counter,
		config = {
		resultContainer: '#result',
		consoleMsgs: true
	},

 // check 
 // http://stackoverflow.com/questions/1290131/javascript-how-to-create-an-array-of-object-literals-in-a-loop
 // http://stackoverflow.com/questions/180844/referencing-a-javascript-object-literal-array
		selectionList = [
			{ 
				title: 'default title',
				img_src: 'default_imgsource.jpg',
				description: 'default description'
			},
			{ 
				title: 'default title',
				img_src: 'default_imgsource.jpg',
				description: 'default description'
			},

		]
	;
	// public api
	return {
		displayOptions: function () {
			// display options a and b with their properties, including right or wrong
			if(config.consoleMsgs){
				console.log('%c (/•ิ_•ิ)/ >>>> displaying options <<<< \\(^_^ )', 'background: #222; color: #bada55');
			}
		},
		nextSelection: function () {
			// move to the next pair of options
		},
		isCorrect: function () {
			// establish if selection was right
		},
		displayResult: function () {
			// display result of selection
			$(config.resultContainer + ' p').html('Correct!!!');
		},
		finishApp: function () {
			// displays the last view of the app
		}
	};
}());