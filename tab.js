function greetVijay() {
	let resp = "";
	let d = new Date();
	let hour = d.getHours();
	if (hour >= 16 && hour < 19) {
		resp = "Good Evening Boss"
	} else if (hour >= 7 && hour < 12) {
		resp = "Good Morning Boss"
	} else if (hour >= 12 && hour < 16) {
		resp = "Good Afternoon Boss"
	} else if (hour >= 19 && hour < 22) {
		resp = "Late hours Boss"
	} else if (hour >= 22 && hour < 24) {
		resp = "Good night Vijay"
	} else if (hour >= 0 && hour < 7) {
		resp = "Get some sleep Boss, its too late"
	}

	return resp;
}

function showDate() {
	// body...
	let d = new Date();
	const MON = ["Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"];
	const DAYS = ["Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"];


	let content = ` ${DAYS[d.getDay()]}  ${d.getDate()} / ${MON[d.getMonth()]} / ${d.getFullYear()} `;

	return content;
}

function showTime() {
	// body...
	let d = new Date();

	let content = `Its about ${d.getHours()} : ${d.getMinutes()}`;

	return content;
}

document.getElementById('welcome_msg').innerText = greetVijay();
document.getElementById('time_msg').innerHTML = showTime();
document.getElementById('date_msg').innerHTML = showDate();

// document.getElementsByTagName("body