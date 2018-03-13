var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');

init();
function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	//mode button event listener
	for (var i = 0; i < modeButton.length; i ++){
		modeButton[i].addEventListener('click', function(){
			modeButton[0].classList.remove('selected');
			modeButton[1].classList.remove('selected');
			this.classList.add('selected');
			if(this.textContent === 'Easy') {
				numSquares = 3;
			}else {
				numSquares = 6;
			}
			
			reset();
		});
	
	}
	
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener('click',function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		
		//compare to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?'
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors'
	
	messageDisplay.textContent = '';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	//add inital color to squares;
	if (colors[i]) {
		squares[i].style.display = 'block';
		squares[i].style.backgroundColor = colors[i];
	}else {
		squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}


resetButton.addEventListener('click', function() {
	reset();
})


function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i ++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a 'red' from 0-255;
	var r = Math.floor(Math.random() * 256)
	//pick a 'gren' from 0-255;
	var g = Math.floor(Math.random() * 256)
	//pick a 'blue' from 0-255;
	var b = Math.floor(Math.random() * 256)
	//Make them into String rgb
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}