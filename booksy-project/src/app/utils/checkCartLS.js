import { loadLS, STORAGE_CART_KEY } from "./localStorageHelper";

export function checkCartLS(bookId) {
  const cartBooks = loadLS(STORAGE_CART_KEY) ?? [];
  const btnContent = cartBooks.find(item => item === bookId)
    ? "Remove from cart"
    : "Add to cart";
  const btnDataActions = cartBooks.find(item => item === bookId)
    ? "remove"
    : "add";
  return { btnContent, btnDataActions };
}
