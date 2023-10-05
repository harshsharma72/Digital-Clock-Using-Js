let hours = document.querySelector("#hours");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");


setInterval(() => {
    let currentTime = new Date();
let hrs = currentTime.getHours();
hours.innerHTML = hrs;
let min = currentTime.getMinutes();
minute.innerHTML = min;
let sec = currentTime.getSeconds();
second.innerHTML = sec;
}, 1000);