'use strict';

// destructuring assignment
const calendar = document.querySelector('.calendar'),
	date = document.querySelector('.date'),
	daysContainer = document.querySelector('.days'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next');

let today = new Date();
let activeDay;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
