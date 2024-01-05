// let hours = document.querySelector("#hours");
// let minute = document.querySelector("#minute");
// let second = document.querySelector("#second");

// setInterval(() => {
//   let currentTime = new Date();
//   let hrs = currentTime.getHours();
//   hours.innerHTML = hrs;
//   let min = currentTime.getMinutes();
//   minute.innerHTML = min;
//   let sec = currentTime.getSeconds();
//   second.innerHTML = sec;
// }, 1000);

let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();
  let hrs = currentTime.getHours();
  hour.innerText = hrs;
  let minute = currentTime.getMinutes();
  min.innerText = minute;
  let second = currentTime.getSeconds();
  sec.innerText = second;
}, 1000);
