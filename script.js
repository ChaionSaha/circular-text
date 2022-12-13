'use strict';

const text = document.querySelector('#circular-text');
const splittedText = text.innerText.toUpperCase().split('');

let computedStyle = window.getComputedStyle(text.parentElement);

const circularText = () => {
	let radius = parseInt(computedStyle.getPropertyValue('height')) / 2,
		diameter = radius * 2;
	text.style.width = `${diameter}px`;
	text.style.height = `${diameter}px`;

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
		const transform = `translate(${xPos}px, ${yPos}px)`;
		const rotate = `rotate(${index * deltaAngle}deg)`;
		newSpan.style.transform = `${transform} ${rotate}`;
		text.appendChild(newSpan);
	});
};

circularText();
window.addEventListener('resize', () => {
	circularText();
});
