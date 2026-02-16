import { request } from "./http";

export function fetchCategories() {
  return request("/categories");
}
