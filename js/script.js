let hr = document.getElementById('hours');
let min = document.getElementById('mins');
let sec = document.getElementById('secs');

function displaytime(){
    let date = new Date();

    // getting hr, min, sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displaytime, 1000);