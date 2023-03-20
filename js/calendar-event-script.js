'use strict';

const addEventBtn = document.querySelector('.add-event'),
	addEventContainer = document.querySelector('.add-event-wrapper'),
	addEventCloseBtn = document.querySelector('.close'),
	addEventTitle = document.querySelector('.event-name'),
	addEventFrom = document.querySelector('.event-time-from'),
	addEventTo = document.querySelector('.event-time-to');

addEventBtn.addEventListener('click', () => {
	addEventContainer.classList.toggle('active');
});

addEventCloseBtn.addEventListener('click', () => {
	addEventContainer.classList.remove('active');
});

// close AddEvent "popup"
document.addEventListener('click', (e) => {
	if (e.target !== addEventBtn && !addEventContainer.contains(e.target)) {
		addEventContainer.classList.remove('active');
	}
});
