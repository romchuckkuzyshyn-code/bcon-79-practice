//Перетворення масиву в об'єкт
//Дано масив об'єктів:
const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
//Завдання: За допомогою reduce перетворіть масив у об'єкт, де ключем буде id, а значенням — відповідний об'єкт.
//Очікуваний результат:
const res = () =>
  people.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

console.log(res());

//{
// 1: { id: 1, name: 'Alice' },
// 2: { id: 2, name: 'Bob' },
// 3: { id: 3, name: 'Charlie' }
//}
