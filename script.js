// based on instructions at https://www.w3schools.com/howto/howto_js_countdown.asp

var weddingDate = new Date("July 10, 2021 17:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = weddingDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " days ";
  document.getElementById("hours").innerHTML = hours + " hours ";
  document.getElementById("minutes").innerHTML = minutes + " minutes ";
  document.getElementById("seconds").innerHTML = seconds + " seconds ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "IT HAPPENED!!!";
    document.getElementById("hours").innerHTML = "OMG";
    document.getElementById("minutes").innerHTML = "IT'S OFFICIAL!";
    document.getElementById("seconds").innerHTML = "WIFE & HUSBAND";
  }
}, 1000);
