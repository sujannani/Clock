function rotateHands() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	
	const hourHand = document.querySelector(".hour-hand");
	const minuteHand = document.querySelector(".minute-hand");
	const secondHand = document.querySelector(".second-hand");
	
	const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;
	const minuteAngle = (minutes / 60) * 360;
	const secondAngle = (seconds / 60) * 360;
	
	hourHand.style.transform = `rotate(${hourAngle}deg)`;
	minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
	secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(rotateHands, 1000);