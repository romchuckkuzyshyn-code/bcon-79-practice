export function renderCategories(markup) {
  const filterEl = document.querySelector(".js-products-filter");
  filterEl.insertAdjacentHTML("beforeend", markup);
}
