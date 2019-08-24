"use strict";

var hamburger = document.getElementById("menu");

hamburger.onclick = function () {
  var navLine = document.getElementById("navLine");
  navLine.classList.toggle("navLine--open");
};