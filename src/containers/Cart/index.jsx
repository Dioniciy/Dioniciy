import CardList from "components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "features/products/selector";
import { CLEAR_CART, productCardAction } from "features/products/actions";
import { numberOfPages } from "helpers/numberOfPages";
import { NUMBER_OF_PRODUCTS_ONE_PAGE } from "../../constants";
import { Pagination } from "components/Pagination";
import { useHistory } from "react-router-dom";
import { Header } from "components/Header";
import { BreadCrumps } from "components/BreadCrumps";
import { useEffect } from "react";

const START_PAGE = 1;

export function Cart() {
  const products = useSelector(selectProducts("cart"));

  let history = useHistory();
  const dispatch = useDispatch();
  const isNeededPagination =
    numberOfPages(products.length, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1;
  const onClearCartList = () => {
    localStorage.removeItem("cart");
    dispatch(productCardAction(CLEAR_CART));
    history.push("/");
  };
  useEffect(() => {}, [products.length]);
  return (
    <>
      <Header />
      <section className={"reducer-list"}>
        <div className="container ">
          <BreadCrumps />
          <button
            className="btn btn--large btn--border-radius"
            onClick={() => history.push("/")}
          >
            back to home
          </button>
          <button
            className={
              "btn btn--violet btn--border-radius btn--large clear-wishlist"
            }
            onClick={onClearCartList}
          >
            Clear all items
          </button>
          <div className="products products-list__main">
            <CardList products={products} startPage={START_PAGE} isCart />
            {isNeededPagination ? (
              <Pagination
                numberOfPages={numberOfPages(
                  products.length,
                  NUMBER_OF_PRODUCTS_ONE_PAGE
                )}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
