"use strict";

const lengthOfStay = document.querySelector(".length-of-stay");
const price = document.querySelector(".price");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  if (!lengthOfStay)
    price.textContent = "Please enter a number for length of stay.";
});
