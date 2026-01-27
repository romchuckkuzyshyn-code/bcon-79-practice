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

// const out4 = document.querySelector(".out-4");
// fn4();

// function fn4() {
//   const sp = document.querySelector(".task-4");
//   const arr4 = [];
//   sp.forEach(element => {
//     arr4.push(element.dataset.value);
//   });
//   out4.textContent = arr4;
// }
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
  // console.log("🚀 ~ fn13 ~ arr13_res:", arr13_res);
  out13.textContent = arr13_res;
}
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = fn14;

function fn14() {
  const arr14_res = arr14.filter(num => typeof num === "number");
  out14.textContent = arr14_res;
  // console.log("🚀 ~ fn14 ~ arr14_res:", arr14_res);
}

// Task 15
const arr15 = [3, 14, 15, 92, "6"];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = fn15;

function fn15() {
  const arr15_res = arr15.filter(
    num => typeof num === "number" && num % 2 === 0
  );
  out15.textContent = arr15_res;
}

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");

btn16.onclick = fn16;

function fn16() {
  const arr16_res = arr16.filter(num => Number.isInteger(num) && num > 14);
  out16.textContent = arr16_res;
}

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = fn17;

function fn17() {
  const arr17_res = arr17.map(str => str.toLocaleLowerCase());
  out17.textContent = arr17_res;
}

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = fn18;

function fn18() {
  const arr18_res = arr18
    .map((number, index) => {
      if (number % 2 === 0) {
        return index;
      }
      return null;
    })
    .filter(num => num);
  // console.log("🚀 ~ fn18 ~ arr18_res:", arr18_res);
  out18.textContent = arr18_res;
}

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");

btn19.onclick = fn19;

function fn19() {
  arr19.forEach((element, index, array) => {
    const el = element.toLocaleLowerCase();
    array[index] = el;
  });
  console.log("🚀 ~ arr19:", arr19);
}
const result = arr19.join(",").toLowerCase().split(",");
// console.log("🚀 ~ result:", result);
// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = fn20;

function fn20() {
  arr20.forEach((number, index, array) => {
    if (number < 0) array[index] = 0;
  });
  // console.log("🚀 ~ arr20:", arr20);
  out20.textContent = `[${arr20}]`;
}

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const btn21 = document.querySelector(".b-21");
const out21 = document.querySelector(".out-21");

const fn21 = () => {
  const arr21_res = arr21.filter((item, index) => index % 2 === 0);
  out21.textContent = arr21_res;
};

btn21.onclick = fn21;

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const btn22 = document.querySelector(".b-22");
const out22 = document.querySelector(".out-22");

const fn22 = () => {
  out22.textContent = Array.isArray(arr22);
};

btn22.onclick = fn22;
// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;
const btn23 = document.querySelector(".b-23");
const out23 = document.querySelector(".out-23");

const fn23 = () => {
  out23.textContent = arr23.includes(arr23_num);
};

btn23.onclick = fn23;

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr24_sum = "D";
const btn24 = document.querySelector(".b-24");
const out24 = document.querySelector(".out-24");

const fn24 = () => {
  const registr = arr24_sum.toLocaleLowerCase();
  const result = arr24.join("").toLocaleLowerCase().split("").includes(registr);
  out24.textContent = result;
};

btn24.onclick = fn24;

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
// const btn25 = document.querySelector(".b-25");
// const out25 = document.querySelector(".out-25");

// const fn25 = () => {
//   const arr25_res = arr25.filter(pass => {
//     if (pass.pnum.length === 6 && pass.pnum.length !== 0) {
//     }
//   });
//   out25.innerHTML = arr25_res;
// };

// btn25.onclick = fn25;
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
