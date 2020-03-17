const current = new Date();
let init_hrs = current.getHours();
let init_mins = current.getMinutes();
let init_seconds = current.getSeconds();
var clock = document.getElementById('clock'),
    hr_hand = document.getElementById('hour'),
    min_hand = document.getElementById('minute'),
    sec_hand = document.getElementById('second'),
    hr_deg = (init_hrs%12 || 12)*30,
    min_deg = init_mins*6,
    sec_deg = init_seconds*6;

function setup(){
    hr_hand.style.transform = `rotate(${hr_deg}deg)`;
	min_hand.style.transform = `rotate(${min_deg}deg)`;
	sec_hand.style.transform = `rotate(${sec_deg}deg)`;
}

window.addEventListener('load', setup);

