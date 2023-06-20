function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, delay);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      currentNumber++;
      callback(currentNumber);
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  animateNumber(1000, 1, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("transaction-count").innerText = formattedNumber;
  });
  animateNumber(23, 20, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("city-count").innerText = formattedNumber;
  });
  animateNumber(150, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("customer-count").innerText = formattedNumber;
  });
});
// CountDown Timer starts
var countDownDate = new Date("June 24, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
// CountDown Timer ends
