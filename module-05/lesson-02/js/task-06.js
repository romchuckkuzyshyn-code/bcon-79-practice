//Згладження вкладеного масиву
//Дано вкладений масив:

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
//Очікуваний результат:
//[1, 2, 3, 4, 5, 6]

const res = () => {
  return nestedArray.reduce((acc, item) => acc.concat(item), []);
};
console.log(res());
