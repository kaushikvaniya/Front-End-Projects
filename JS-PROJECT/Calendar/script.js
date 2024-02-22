const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");

const today = new Date();

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

dateElement.innerHTML = today.getDate();
dayElement.innerHTML = weekDay[today.getDay()];
monthElement.innerHTML = monthNames[today.getMonth()];
yearElement.innerHTML = today.getFullYear();
