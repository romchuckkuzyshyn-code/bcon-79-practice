// Найбільше число в масиві
//Дано масив чисел:

const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

const res = () => {
  return numbers.reduce((acc, num) => {
    if (acc > num) {
      return acc;
    } else return num;
  }, 0);
};
console.log(res());
