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

// start with facade and then move to a constructor like the one in page 100

var CHOOO = CHOOO || {};

	CHOOO = (function(){
	// private properties
	var counter,
		position = 0,
		config = {
			container: '#container',
			resultContainer: '#result', // this will be replaced by parameter in constructor
			consoleMsgs: true
	},

 // check 
 // http://stackoverflow.com/questions/1290131/javascript-how-to-create-an-array-of-object-literals-in-a-loop
 // http://stackoverflow.com/questions/180844/referencing-a-javascript-object-literal-array
		selectionList = [
			{ 
				id: '01',
				title: '01_01',
				img_src: '01_01.jpg',
				description: 'default description'
			},
			{ 
				id: '02',
				title: '01_02',
				img_src: '01_02.jpg',
				description: 'default description'
			}

		]
	;
	// public api
	return {
		selectionList: [
			{
				option_A:{ 
					id: '01',
					title: '01_a',
					img_src: '01_a.jpg',
					description: 'default description',
					isCorrect: true
				},
				option_B:{ 
					id: '02',
					title: '01_b',
					img_src: '01_b.jpg',
					description: 'default description',
					isCorrect: false
				}
			},
			{
				option_A:{ 
					id: '03',
					title: '02_a',
					img_src: '02_a.jpg',
					description: 'default description',
					isCorrect: false
				},
				option_B:{ 
					id: '04',
					title: '02_b',
					img_src: '02_b.jpg',
					description: 'default description',
					isCorrect: true
				}
			}

		],
		init: function ( usrContainer ) {

		},
		insertSelectionData: function () {
			console.log( CHOOO.selectionList[1].option_A.id );
			console.log('img src: ');
			console.log( CHOOO.selectionList[0].option_A.img_src );

			var options = ['option_A','option_B'];
			for(var i = 0; i < options.length; i++){

				//title
				$(config.container + ' #'+ options[i] +' h3').html(CHOOO.selectionList[ position ][options[i]].title);
				//image
				$(config.container + ' #'+ options[i] +' img').attr('src', CHOOO.selectionList[ position ][options[i]].img_src);
				//description
				$(config.container + ' #'+ options[i] +' p').html(CHOOO.selectionList[ position ][options[i]].description);
				//answer
				$(config.container + ' #'+ options[i]).data('is-correct',CHOOO.selectionList[ position ][options[i]].isCorrect);
			}
		},
		attachEventListeners: function () {
			console.log( 'this is container:' + container );

			$(config.container + ' .option').on('click',function(e){
				console.log($(this));
				// add displayResult etc here
				// result evaluation
				CHOOO.displayResult($(this));
				// display result
				// go to next set (change images with animation)

			});

			$(config.container + ' #option_A h3').animate({
			  opacity: 0
			},{
			  duration: 1800,
			  easing: 'ease-out',
			  complete: function() { /* ... */ }
			});
		},
		testNextSelection: function () {
			console.log( selectionList[position].title );
			position = position + 1;	
		},
		displayOptions: function () {
			// display options a and b with their properties, including right or wrong
			if(config.consoleMsgs){
				console.log('%c (/•ิ_•ิ)/ >>>> displaying options <<<< \\(^_^ )', 'background: #222; color: #bada55');
			}
			//CHOOO.selectionList[1][0]

		},
		nextSelection: function () {
			// move to the next pair of options
		},
		isCorrect: function () {
			// establish if selection was right
		},
		displayResult: function ( selectedElem ) {
			// display result of selection
			console.log(selectedElem);
			// check if selected element isCorrect attribute is true or false
			if(true){
				$(config.resultContainer + ' p').html('Correct!!!');
			}
			else{

			}

			
		},
		finishApp: function () {
			// displays the last view of the app
		}
	};
}());