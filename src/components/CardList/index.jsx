import "../../style.css";
import Card from "../Card";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../features/pages/selectors";
import { setProductsPage } from "../../helpers/setProductsPage";
import classes from './CardList.module.scss'

export default function CardList({ products, isCart }) {
  let currentPage = useSelector(selectCurrentPage);
  currentPage =
    setProductsPage(products, currentPage, 9) < 1
      ? currentPage - 1
      : currentPage;
  products = isCart ? setProductsPage(products, currentPage, 9) : products;
  return (
    <div className={classes['products__inner']} data-element="body">
      {products.map((product) => {
        return (
          <Card
            key={isCart ? product.uniqId : product.id}
            product={{ ...product }}
            isCart={isCart}
          />
        );
      })}
    </div>
  );
}
