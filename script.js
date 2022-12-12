'use strict';

const text = document.querySelector('.text');
const splittedText = text.innerText.toUpperCase().split('');

const radius = 10,
	diameter = radius * 2;

text.style.width = `${diameter}vw`;
text.style.height = `${diameter}vw`;

const angleToRadian = (angle) => {
	return angle * (Math.PI / 180);
};

let angle = -90,
	deltaAngle = 360 / splittedText.length;

text.innerText = null;
splittedText.forEach((letter, index) => {
	const newSpan = document.createElement('span');
	newSpan.innerText = letter;

	let xPos = radius * Math.cos(angleToRadian(angle)) + radius;
	let yPos = radius * Math.sin(angleToRadian(angle)) + radius;

	angle += deltaAngle;
	const transform = `translate(${xPos}vw, ${yPos}vw)`;
	const rotate = `rotate(${index * deltaAngle}deg)`;
	newSpan.style.transform = `${transform} ${rotate}`;
	text.appendChild(newSpan);
});
