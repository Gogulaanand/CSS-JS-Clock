
var clock = document.getElementById('clock'),
    hr_hand = document.getElementById('hour'),
    min_hand = document.getElementById('minute'),
    sec_hand = document.getElementById('second');

function setup(){
    const current = new Date();
    var hr_deg = (current.getHours()%12 || 12)*30,
        min_deg = current.getMinutes()*6,
        sec_deg = current.getSeconds()*6;
    hr_hand.style.transform = `rotate(${hr_deg}deg)`;
	min_hand.style.transform = `rotate(${min_deg}deg)`;
    sec_hand.style.transform = `rotate(${sec_deg}deg)`;
}

window.addEventListener('load', setup);

setInterval(setup, 1000);