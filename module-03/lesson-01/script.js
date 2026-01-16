// Task-1

const ar1 = ["hello", 42, true, "js", false, 3.14];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = f1;

function f1() {
  out1.textContent = ar1;
}
// Task-2

const ar2 = ["hello", 42, true, "js", false, 3.14];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = f2;

function f2() {
  out2.textContent = `${ar2[0]} ${ar2[1]} ${ar2[2]} ${ar2[3]} ${ar2[4]} ${ar2[5]}`;
}

// Task-3

const ar3 = ["hello", 42, true, "js", false, 3.14];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = f3;

function f3() {
  out3.textContent = ar3.length;
}

// Task-4

const ar4 = ["hello", 42, true, "js", false, 3.14];
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = f4;

function f4() {
  out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}

// Task-5

const ar5 = ["hello", 42, true, "js", false, 3.14];
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = f5;

function f5() {
  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

// Task-6

const ar6 = ["Roman", "Lion", "12", "August"];
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = f6;

function f6() {
  out6.textContent = ar6.join(" ");
}

// Task-7

const ar7 = [];
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

btn7.onclick = f7;

function f7() {
  ar7[7] = "vietnam";
  ar7[6] = "turkey";
  ar7[5] = "italy";
  out7.textContent = ar7.join(" ");
}

// Task-8

const ar8 = [];
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = f8;

function f8() {
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  out8.textContent = ar8.length;
}
// console.log("🚀 ~ ar8:", ar8);

// Task-9

const ar9 = ["Roman", "Lion", "12", "August"];
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = f9;

function f9() {
  const lastI = ar9.length - 1;
  console.log("🚀 ~ f9 ~ lastI:", lastI);
  out9.textContent = ar9[lastI];
}
// Task-10

const ar10 = [100, 200, 300, 400, 700, 121];
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = f10;

function f10() {
  const lastI = ar10.length - 1;
  out10.textContent = ar10[1] + ar10[lastI];
}

// Task-11

const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = f11;

function f11() {
  const a1 = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = a1;
  out11.textContent = ar11.join(" ");
}

// Task-12

const ar12 = ["test", "west", "list", "class", "best"];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = f12;

function f12() {
  let result = "";
  const firstEl = ar12.at(0);
  console.log("🚀 ~ f12 ~ firstEl:", firstEl);
  const lastEl = ar12.at(-1);
  console.log("🚀 ~ f12 ~ lastEl:", lastEl);
  ar12[0] = lastEl;
  ar12[ar12.length - 1] = firstEl;
  // const a1 = ar12[0];
  // const lastI = ar12.length - 1;
  // ar12[0] = lastI;
  // ar12[lastI] = a1;

  for (let i = 0; i < ar12.length; i++) {
    result += ar12[i] + " ";
  }
  out12.textContent = result;
}
// Task-13

const ar13 = ["test", "west", "list", "class", "best"];
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = f13;

function f13() {
  let result = "";
  for (let i = 0; i < ar13.length; i++) {
    result += i + " " + ar13[i] + " ";
  }
  out13.textContent = result;
}
// Task-14

const ar14 = [1, 2, 3, "hello", 66];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = f14;

function f14() {
  let result = "";
  for (let i = ar14.length - 1; i >= 0; i--) {
    result += ar14[i] + " ";
  }
  out14.textContent = result;
}

// Task-15

const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = f15;

function f15() {
  let result = "";
  for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
      result += ar15[i] + " ";
    }
  }
  out15.textContent = result;
}

// Task-16

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector(".b-16");
const out161 = document.querySelector(".out-16-odd");
const out162 = document.querySelector(".out-16-even");

btn16.onclick = f16;

function f16() {
  let ar16_odd = [];
  let ar16_even = [];
  // ar16_even[3] = 222
  let oddCounter = 0;
  let evenCounter = 0;

  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      ar16_even[evenCounter] = ar16[i];
      evenCounter += 1; // (++)
      // ar16_even.push(ar16[i]);
    } else {
      ar16_odd[oddCounter] = ar16[i];
      oddCounter += 1;
      // ar16_odd.push(ar16[i]);
    }
  }
  out161.textContent = ar16_even;
  out162.textContent = ar16_odd;
}

// Task-17

const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = f17;

function f17() {
  // let counter = 0;
  const filteredAr = [];
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      // counter++;
      filteredAr.push(ar17[i]);
    }
  }
  // out17.textContent = counter;
  out17.textContent = filteredAr.length;
}

// Task-18

// Task-19

// Task-20
