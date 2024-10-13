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
	const DAYS = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"];


	let content = ` ${DAYS[d.getDay()]}  ${d.getDate()} / ${MON[d.getMonth()]} / ${d.getFullYear()} `;

	return content;
}

function showTime() {
	// body...
	let d = new Date();

	let content = `Its ${d.getHours()} : ${d.getMinutes()}`;

	return content;
}

function mockMode(targetName) {
	showHistoryInPage(myhist.filter(x => (x.title.toLowerCase().indexOf(targetName.toLowerCase()) != -1)), "history_search_result");
}

function search(targetName) {
	searchHistory(targetName)
	searchBookmark(targetName)
}

function fillData(event) {
	if (event.keyCode == 13 || event.target.id == "fillData") {
		//enter key was pressed
		console.log(event)
		let targetName = document.getElementById("ip").value;
		// mockMode(targetName)
		search(targetName)
	}

}

function searchHistory(key) {

	chrome.history.search({
		text: key,
		startTime: 1640995200000,
		maxResults: 10000
	}, (xList) => {
		showHistoryInPage(xList, "history_search_result");

	})

}

function searchBookmark(key) {
	chrome.bookmarks.search(
		{ query: key },
		(resp) => {
			showHistoryInPage(resp, "bookmarks_search_result");
		}
	)
}

document.getElementById('welcome_msg').innerText = greetVijay();
document.getElementById('time_msg').innerHTML = showTime();
document.getElementById('date_msg').innerHTML = showDate();
document.getElementById("fillData").addEventListener("click", fillData);
document.getElementById("ip").addEventListener("keydown", fillData);

function breakTag() {
	return document.createElement('br');
}

function anchorTag(url, text) {
	let linkA = document.createElement('a');
	linkA.href = url;
	linkA.text = text;
	return linkA;
}

function highlight(text) {
	let innerHTML = text;
	let targetName = document.getElementById("ip").value;
	var index = innerHTML.toLowerCase().indexOf(targetName.toLowerCase());
	if (index >= 0) {
		innerHTML = innerHTML.substring(0, index) + "<span style='background-color: yellow;border:solid 1px red;font-size:12pt'>" + innerHTML.substring(index, index + targetName.length) + "</span>" + innerHTML.substring(index + targetName.length);
	}
	return innerHTML;
}
function h2Tag(text) {
	let h2Ele = document.createElement('div');
	h2Ele.innerHTML = highlight(text);
	return h2Ele;
}

function makeCustomDiv(data) {
	let myDiv = document.createElement('div');
	myDiv.style.border = 'solid 1px black';
	myDiv.style.padding = '15px';
	myDiv.style.margin = '5px';

	myDiv.appendChild(h2Tag(data.title));
	myDiv.appendChild(h2Tag(data.url));

	myDiv.appendChild(breakTag());

	myDiv.appendChild(anchorTag(data.url, data.title));

	return myDiv;
}
function showHistoryInPage(xList, tagName) {
	document.getElementById(tagName).innerHTML = "";
	document.getElementById(tagName + '_count').innerHTML = xList.length;

	for (let x of xList) {

		document.getElementById(tagName).append(breakTag());
		document.getElementById(tagName).append(makeCustomDiv(x));

	}
}

