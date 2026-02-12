export const STORAGE_CART_KEY = "book-cart";

export function saveLS(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(STORAGE_CART_KEY, serializedValue);
  } catch (error) {
    console.log(error);
  }
}

export function loadLS(key) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      return JSON.parse(serializedValue);
    }
  } catch (error) {
    console.log(error);
  }
}
