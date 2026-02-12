import { renderBookModalContent } from "../render/bookModalContent";
import fetchBookId from "../services/fetchBookId";
import refs from "../utils/refs";
import { loadLS, saveLS, STORAGE_CART_KEY } from "../utils/localStorageHelper";

refs.booksList.addEventListener("click", onBookListClick);
refs.bookModal.addEventListener("click", onCartBtnClick);

//? get data from LS

function onBookListClick(event) {
  const currEl = event.target;

  const bookCard = currEl.closest(".js-book-card");
  if (bookCard === null) {
    return;
  }
  const {
    dataset: { bookId: id },
  } = bookCard;
  fetchBookId(id)
    .then(bookInfo => {
      renderBookModalContent(bookInfo, refs.bookModal);
      refs.bookModal.showModal();
    })
    .catch(err => {
      console.log(err.message);
    });
}

function onCartBtnClick(event) {
  const cartBooks = loadLS(STORAGE_CART_KEY) ?? [];

  const currEl = event.target;
  const isCartBtn =
    // currEl.nodeName === "BUTTON" && currEl.hasAttribute("data-cart-btn"); // або так
    "cartBtn" in currEl.dataset; // або так

  if (!isCartBtn) return;
  const bookId = currEl.closest(".book-modal-content")?.dataset?.bookId;
  const { cartBtn } = currEl.dataset;
  if (cartBtn === "add") {
    cartBooks.push(bookId);
    saveLS(STORAGE_CART_KEY, cartBooks);
    currEl.textContent = "Remove from cart";
    currEl.setAttribute("data-cart-btn", "remove");
    return;
  }
  if (cartBtn === "remove") {
    const filteredCartBooks = cartBooks.filter(id => id !== bookId);
    saveLS(STORAGE_CART_KEY, filteredCartBooks);
    currEl.textContent = "Add to cart";
    currEl.setAttribute("data-cart-btn", "add");
    return;
  }
}
