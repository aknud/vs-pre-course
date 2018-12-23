const favThings = [ 'board games', 'hiking', 'bicycles', 'code', 'cocktails', 'cats' ];
let next = false;
let text = document.getElementById('cool-text');
var btn = document.querySelector('.click-me-btn');

function clicked() {
	next = true;
	if (next) {
		btn.innerHTML = 'next quote';
	}
	fetch('https://api.adviceslip.com/advice')
		.then((data) => data.json())
		.then((data) => (text.innerHTML = data.slip.advice));
}
const fav = document.querySelector('.favorite');

for(let i = 0; i < favThings.length; i++){
	fav.innerHTML += `${favThings[i]}</br>`
}

btn.addEventListener('click', clicked);


//be able to explain these data types:
//Strings
//Numbers
//Booleans
//Arrays (Why are they useful? What does zero-indexed mean?)
