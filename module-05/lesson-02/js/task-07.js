// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return function (str) {
    if (password === str) {
      return true;
    } else return false;
  };
}
const checkPassword = savePassword("12345");

console.log(checkPassword("12345"));
console.log(checkPassword("qwerty"));
