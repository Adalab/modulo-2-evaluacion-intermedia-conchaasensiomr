'use strict';

const number = document.querySelector('.js-number-introduce');

function getRandomNumber(max) {
  return Math.ceil(Math.random(100) * 100);
}

function updateNumber() {
  let numberValue = number.nodeValue;
  number.innerHTML = numberValue;
  console.log(numberValue);
}
