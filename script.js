const slow = document.querySelector('.slow');
const normal = document.querySelector('.normal');
const fast = document.querySelector('.fast');
const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const points = document.querySelector('.points');

let myInterval;
let time = 1000;

start.addEventListener('click', () => {
	gameStarted();
	start.setAttribute('disabled', true);
});

function gameStarted() {
	myInterval = setInterval(() => {
		cells.forEach((cell) => cell.classList.remove('active'));
		let randomCell = Math.floor(Math.random() * cells.length);
		cells[randomCell].classList.add('active');
        console.log(time)
	}, time);
}

cells.forEach((cell) => {
	cell.addEventListener('click', () => {
		if (cell.classList.contains('active')) {
			points.innerHTML = Number(points.innerHTML) + 1;
		}
	});
});

reset.addEventListener('click', () => {
	start.removeAttribute('disabled');
	points.innerHTML = '0';
	clearInterval(myInterval);
	cells.forEach((cell) => cell.classList.remove('active'));
});

slow.addEventListener('click', () => {
	if (start.hasAttribute('disabled')) {
		clearInterval(myInterval);
		time = 1500;
		gameStarted();
	}
});

normal.addEventListener('click', () => {
	if (start.hasAttribute('disabled')) {
		clearInterval(myInterval);
		time = 1000;
		gameStarted();
	}
});

fast.addEventListener('click', () => {
	if (start.hasAttribute('disabled')) {
		clearInterval(myInterval);
		time = 750;
		gameStarted();
	}
});


