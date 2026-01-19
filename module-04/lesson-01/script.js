// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = f1;

function f1() {
  out1.textContent = obj1.two;
}

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = f2;

function f2() {
  out2.textContent = obj2["five"];
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = f3;

function f3() {
  let result = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      result += obj3[key] + " ";
    }
  }
  out3.textContent = result;
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = f4;

function f4() {
  let result = "";
  for (const key in obj4) {
    result += key + " " + obj4[key] + " <br />";
  }
  out4.innerHTML = result;
}

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

function f5(obj, out) {
  let result = "";
  for (const key in obj) {
    result += key + ": " + obj[key] + " <br/>";
  }
  out.innerHTML = result;
}

btn5.onclick = function () {
  f5(obj5, out5);
};

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");

btn6.onclick = f6;

function f6() {
  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  f5(obj6, out6);
}
// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
const input7 = document.querySelector(".i-7");

btn7.onclick = f7;

function f7() {
  let result = 0;
  const value = input7.value;
  for (const key in obj7) {
    if (value === key) {
      result = 1;
    }
  }
  out7.textContent = result;
}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const input8 = document.querySelector(".i-8");

btn8.onclick = f8;

function f8() {
  let result = 0;
  const value = input8.value;
  for (const key in obj8) {
    if (value === key) {
      result = obj8[key];
    }
  }
  out8.textContent = result;
}

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const input9 = document.querySelector(".i-9");

btn9.onclick = f9;

function f9() {
  let result = "";
  const value = +input9.value;
  for (const key in obj9) {
    if (value === obj9[key]) {
      result += key + " ";
    }
  }
  out9.textContent = result;
}

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

// btn10.onclick = f10;

function f10(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}
btn10.onclick = function () {
  out10.textContent = f10(obj10, 54);
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

btn11.onclick = f11;

function f11() {
  const key = input11.value;

  delete obj11[key];

  f5(obj11, out11);
}

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
const input12 = document.querySelector(".i-12");

btn12.onclick = f12;

function f12() {
  const number = +input12.value;
  for (const key in obj12) {
    if (number === obj12[key]) {
      delete obj12[key];
    }
  }

  f5(obj12, out12);
}

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = f13;

function f13() {
  let result = 0;
  for (const key in obj13) {
    const numbers = +obj13[key];
    if (!Number.isNaN(numbers)) {
      result += numbers;
    }
    out13.textContent = result;
  }
}
// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = f14;

function f14() {
  let result = "";

  for (const key in obj14) {
    result += obj14[key][0] + " ";
  }

  out14.textContent = result;
}

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = f15;

function f15() {
  let result = "";
  for (const key in obj15) {
    result += obj15[key].join(" ") + " ";
  }
  out15.textContent = result;
}

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");

btn16.onclick = f16;

function f16() {
  let result = "";
  for (const key in obj16) {
    result += `${obj16[key].name}` + " ";
  }
  out16.textContent = result;
}

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = f17;

function f17() {
  let result = "";
  for (const key in obj17) {
    if (obj17[key].age < 30) {
      result += `${obj17[key].name}` + " ";
    }
  }
  out17.textContent = result;
}

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");
const input18 = document.querySelector(".i-18");

btn18.onclick = f18;

function f18() {
  let result = "";
  const value = input18.value;
  result = obj18[value].join(" ");
  out18.textContent = result;
}

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
