// 'use strict';

// // import {date} from ".calendar-event-script.js"

// const addEventBtn = document.querySelector('.add-event'),
// 	addEventContainer = document.querySelector('.add-event-wrapper'),
// 	addEventCloseBtn = document.querySelector('.close'),
// 	addEventTitle = document.querySelector('.event-name'),
// 	addEventFrom = document.querySelector('.event-time-from'),
// 	addEventTo = document.querySelector('.event-time-to');

// addEventBtn.addEventListener('click', () => {
// 	addEventContainer.classList.toggle('active');
// });

// addEventCloseBtn.addEventListener('click', () => {
// 	addEventContainer.classList.remove('active');
// 	// addEventTitle.value  = '';
// });

// // close AddEvent "popup"
// document.addEventListener('click', (e) => {
// 	if (e.target !== addEventBtn && !addEventContainer.contains(e.target)) {
// 		addEventContainer.classList.remove('active');
// 	}
// });

// // alow ony 50 chars in title
// addEventTitle.addEventListener('input', (e) => {
// 	addEventTitle.value = addEventTitle.value.slice(0, 50);
// });

// // time format in "from" and "to" time

// addEventFrom.addEventListener('input', (e) => {
// 	// remove anythingelse
// 	addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, '');
// 	// Adding ":" after 2 numbers
// 	if (addEventFrom.value.length === 2) {
// 		addEventFrom.value += ':';
// 	}
// 	if (addEventFrom.value.length > 5) {
// 		addEventFrom.value = addEventFrom.value.slice(0, 5);
// 	}
// });

// addEventTo.addEventListener('input', (e) => {
// 	// remove anythingelse
// 	addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, '');
// 	// Adding ":" after 2 numbers
// 	if (addEventTo.value.length === 2) {
// 		addEventTo.value += ':';
// 	}
// 	if (addEventTo.value.length > 5) {
// 		addEventTo.value = addEventFrom.value.slice(0, 5);
// 	}
// });
