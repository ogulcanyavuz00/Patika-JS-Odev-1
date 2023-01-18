"use strict";

const myName = document.getElementById("myName");
const myClock = document.getElementById("myClock");

const name = prompt("İsmin nedir?");
myName.textContent = name;

const addDay = function () {
  const now = new Date();

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
  };

  const date = new Intl.DateTimeFormat("tr-TR", options).format(now);
  myClock.textContent = date;
};

addDay();
setInterval(addDay, 1000);
