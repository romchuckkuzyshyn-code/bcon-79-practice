//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = () => {
  const arr1_res = [];
  arr1.forEach(element => {
    arr1_res.push(element * 2);
  });
  out1.textContent = arr1_res;
};

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = () => {
  const arr2_res = [];
  arr2.forEach(element => {
    arr2_res.push(element / 2);
  });
  out2.textContent = arr2_res;
};

// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = () => {
  const arr3_res = [];
  arr3.forEach(element => {
    if (typeof element === "number") {
      arr3_res.push(element);
    }
  });
  out3.textContent = arr3_res;
};
// Task 4

// Task 5

// Task 6
const str6 = "helloworld";
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = () => {
  const arr = str6.split("");
  out6.textContent = arr;
};

// Task 7
const str7 = "hello world hi mazai";
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

btn7.onclick = () => {
  const arr = str7.split(" ");
  out7.textContent = arr;
};
// Task 8
const arr8 = [1, 2, 66, 77, 15];
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = () => {
  const str = arr8.join("-");
  out8.textContent = str;
};
// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = () => {
  const arr = arr9.flat(1);
  const str = arr.join("-");
  out9.textContent = str;
};
// Task 10

const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

// btn10.onclick = () => {
//   const newLink = new URLSearchParams(arr10);
//   const arr10_rest = newLink.toString();
//   out10.textContent = arr10_rest;
// };

btn10.onclick = () => {
  // const newLink = new URLSearchParams(arr10);
  const arr10_rest = Object.keys(arr10)
    .map(key => `${key}=${encodeURIComponent(arr10[key])}`)
    .join("&");
  out10.textContent = arr10_rest;
};

//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  const arr11_res = arr11.map(number => number * 2);

  out11.textContent = arr11_res;
}
// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = fn12;

function fn12() {
  const arr12_res = arr12.map(number => number ** 2);
  out12.textContent = arr12_res;
}
// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = fn13;

function fn13() {
  const arr13_res = arr13.map(Number);
  out13.textContent = arr13_res;
  console.log("🚀 ~ fn13 ~ arr13_res:", arr13_res);
}
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// Task 15
const arr15 = [3, 14, 15, 92, "6"];

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];

// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "e";

// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];

//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
