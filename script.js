setInterval(() => {
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = document.getElementById('session');
    if(hrs>12){
        document.getElementById('session').innerHTML = "PM";
        hrs = hrs - 12;
    }else{
        document.getElementById('session').innerHTML = "AM";
    }
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;


    var d = new Date();
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();

    var hrotation = 30*htime + mtime/2;
    var mrotaion = 6*mtime;
    var srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotaion}deg)`;
    se.style.transform = `rotate(${srotation}deg)`;

},1000)

let Newdate = new Date();
let getDate = Newdate.getDate(); 
let month = Newdate.getMonth();
let year = Newdate.getFullYear();

var dt = document.getElementById('date').innerHTML = getDate;
var mt = document.getElementById('month');
var yr = document.getElementById('year').innerHTML = year;

let months = ['Jan,', 'Feb,', 'Mar,', 'Apr,', 'May,', 'Jun,', 'Jul,', 'Aug,', 'Sep,', 'Oct,', 'Nov,', 'Dec,'];

mt.innerHTML = `${months[month]}`;






