'use strict';

// destructuring assignment
const calendar = document.querySelector('.calendar'),
	date = document.querySelector('.date'),
	daysContainer = document.querySelector('.days'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	todayBtn = document.querySelector('.today-btn'),
	gotoBtn = document.querySelector('.goto-btn'),
	dateInput = document.querySelector('.date-input'),
	addEventBtn = document.querySelector('.add-event'),
	// Events sections "toDoList"
	addEventContainer = document.querySelector('.add-event-wrapper'),
	addEventCloseBtn = document.querySelector('.close'),
	addEventTitle = document.querySelector('.event-name'),
	addEventFrom = document.querySelector('.event-time-from'),
	addEventTo = document.querySelector('.event-time-to');

let today = new Date();
let activeDay;
let month = today.getMonth();
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

// defolt events arrea
const eventArr = [
	{
		day: 16,
		month: 11,
		year: 2022,
		events: [
			{
				title: 'Event 1 lorem ipsum dolar sit genfa tersd DataTransferItemList',
				time: '10:00 AM',
			},
			{
				title: 'Event 2',
				time: '11:00 AM',
			},
		],
	},
];

// function to add days

function initCalendar() {
	// to get prev month days and current mont all days and rem next month days
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const prevLastDay = new Date(year, month, 0);
	const prevDays = prevLastDay.getDate();
	const lastDate = lastDay.getDate();
	const day = firstDay.getDay();
	const nextDays = 7 - lastDay.getDay() - 1;

	// update date top of calendar
	date.innerHTML = `${months[month]} ${year}`; //months[month] + ' ' + year;

	// adding days on dom

	let days = '';

	// prev month days

	for (let i = day; i > 0; i--) {
		days += `<div class="day prev-date">${prevDays - i + 1}</div>`;
	}

	// current month days

	for (let i = 1; i <= lastDate; i++) {
		// if day is today add clas today

		if (
			i === new Date().getDate() &&
			year === new Date().getFullYear() &&
			month === new Date().getMonth()
		) {
			days += `<div class="day today">${i}</div>`;
		}

		// add remaing as it is
		else {
			days += `<div class="day ">${i}</div>`;
		}
	}

	// nezt month days

	for (let i = 1; i <= nextDays; i++) {
		days += `<div class="day next-date">${i}</div>`;
	}

	daysContainer.innerHTML = days;
}

initCalendar();

// prev month

function prevMonth() {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}

	initCalendar();
}

// next month

function nextMonth() {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}

	initCalendar();
}

// goto date functionality //
//and goto today functionality //

todayBtn.addEventListener('click', () => {
	today = new Date();
	month = today.getMonth();
	year = today.getFullYear();
	initCalendar();
});

dateInput.addEventListener('input', (e) => {
	// alow only numbers, remove anything else
	dateInput.value = dateInput.value.replace(/[^0-9/]/g, '');
	if (dateInput.value.length === 2) {
		// add a slash if two numbers entered
		dateInput.value += '/';
	}
	if (dateInput.value.length > 7) {
		// max 7 char
		dateInput.value = dateInput.value.slice(0, 7);
	}
	// if we remove until slash slash it's not removing
	// LERN NEW THING "'deleteContentBackward'"
	if (e.inputType === 'deleteContentBackward') {
		if (dateInput.value.length === 3) {
			dateInput.value = dateInput.value.slice(0, 2);
		}
	}
});

// function to goto entire date

function gotoDate() {
	const dateArr = dateInput.value.split('/');
	// data validation
	if (dateArr.length === 2) {
		if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
			month = dateArr[0] - 1;
			year = dateArr[1];
			initCalendar();
			return;
		}
	}
	// if invalid date
	alert('invalid date');
}

// ####################################
// #### Events sections "toDoList" ####
// ####################################

addEventBtn.addEventListener('click', () => {
	addEventContainer.classList.toggle('active');
});

addEventCloseBtn.addEventListener('click', () => {
	addEventContainer.classList.remove('active');
	// addEventTitle.value  = '';
});

// close AddEvent "popup"
document.addEventListener('click', (e) => {
	if (e.target !== addEventBtn && !addEventContainer.contains(e.target)) {
		addEventContainer.classList.remove('active');
	}
});

// alow ony 50 chars in title
addEventTitle.addEventListener('input', (e) => {
	addEventTitle.value = addEventTitle.value.slice(0, 50);
});

// time format in "from" and "to" time

addEventFrom.addEventListener('input', (e) => {
	// remove anythingelse
	addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, '');
	// Adding ":" after 2 numbers
	if (addEventFrom.value.length === 2) {
		addEventFrom.value += ':';
	}
	if (addEventFrom.value.length > 5) {
		addEventFrom.value = addEventFrom.value.slice(0, 5);
	}
});

addEventTo.addEventListener('input', (e) => {
	// remove anythingelse
	addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, '');
	// Adding ":" after 2 numbers
	if (addEventTo.value.length === 2) {
		addEventTo.value += ':';
	}
	if (addEventTo.value.length > 5) {
		addEventTo.value = addEventFrom.value.slice(0, 5);
	}
});

// EventLISTENER

prev.addEventListener('click', prevMonth);
next.addEventListener('click', nextMonth);
gotoBtn.addEventListener('click', gotoDate);
