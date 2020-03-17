const current = new Date();
let init_hrs = current.getHours();
let init_mins = current.getMinutes();
let init_seconds = current.getSeconds();
var clock = document.getElementById('clock');
var hr_hand = document.getElementById('hour');
var min_hand = document.getElementById('minute');
var sec_hand = document.getElementById('second');


function setup(){
	var hr_deg = (init_hrs%12 || 12)*30;
	var min_deg = init_mins*6;
    var sec_deg = init_seconds*6;
    hr_hand.style.transform = `rotate(${hr_deg}deg)`;
	min_hand.style.transform = `rotate(${min_deg}deg)`;
	sec_hand.style.transform = `rotate(${sec_deg}deg)`;
    hr_hand.offsetHeight;
}

window.addEventListener('load', setup);