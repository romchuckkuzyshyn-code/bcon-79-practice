// Task 01
function fn1() {
  document.querySelector(".out-1").textContent = 1;
}
document.querySelector(".b-1").onclick = fn1;
// Task 02

function fn2() {
  document.querySelector(".out-2").textContent = 2;
}
document.querySelector(".i-2").onclick = fn2;
// Task 03

function fn3() {
  document.querySelector(".out-3").textContent = 3;
}
document.querySelector(".p-3").onclick = fn3;

// Task 04

function fn4() {
  const checkbox = document.querySelector(".i-4");
  document.querySelector(".out-4").textContent = checkbox.checked;
}
document.querySelector(".b-4").onclick = fn4;

// Task 05

function fn5() {
  const checkbox = document.querySelector(".i-5");
  const out5 = document.querySelector(".out-5");
  if (checkbox.checked) {
    out5.textContent = checkbox.value;
  } else {
    out5.textContent = false;
  }
}
document.querySelector(".b-5").onclick = fn5;
// Task 06

const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const input = document.querySelector(".i-6");

const fn6 = () => (out6.textContent = input.value);

btn6.onclick = fn6;

// Task 07

// Task 08

// Task 09

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14

// Task 15

// Task 16

// Task 17

// Task 18

// Task 19

// Task 20
