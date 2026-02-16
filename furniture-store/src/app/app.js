import { loadCategories } from "./components/productFilter/productFilter";
import "./components/productFilter/productFilter.css";
import { renderCategories } from "./core/render";

loadCategories().then(renderCategories);
