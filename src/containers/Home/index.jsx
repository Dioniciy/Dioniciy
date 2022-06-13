import { Sidebar } from "components/Sidebar";
import { Search } from "components/Search";
import heart from "img/icons/white-heart.svg";
import CardList from "components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilters } from "features/filters/selectors";
import { useHistory } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { numberOfPages } from "../../helpers/numberOfPages";
import { NUMBER_OF_PRODUCTS_ONE_PAGE } from "../../constants";
import { GO_TO_START, paginationAction } from "../../features/pages/actions";
import { useEffect, useState } from "react";
import { getRequestUrl } from "../../helpers/setRequestUrl";
import { getProducts } from "features/products/actions.js";
import basket from "img/icons/bag.svg";
import { selectProducts } from "../../features/products/selector";
import { selectSliders } from "../../features/sliders/selectors";
import { selectCurrentPage } from "../../features/pages/selectors";
import { Header } from "components/Header";
import { BreadCrumps } from "components/BreadCrumps";
import { URL_SEARCH } from "fixtures";

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const slidersState = useSelector(selectSliders);
  const filters = useSelector(selectActiveFilters);
  const currentPage = useSelector(selectCurrentPage);
  const sliders = Object.values(slidersState);
  const products = useSelector(selectProducts("all"));
  const numberOfProducts = useSelector(selectProducts("numberOfProducts"));
  const prodUrl = URL_SEARCH;
  const url = getRequestUrl({
    prodUrl,
    filters,
    searchValue,
    sliders,
    currentPage,
  });
  useEffect(() => {
    dispatch(getProducts(url));
  }, [url]);

  function goToWishlist() {
    history.push("/wishlist");
    dispatch(paginationAction(GO_TO_START));
  }

  function goToCartList() {
    history.push("/cart");
    dispatch(paginationAction(GO_TO_START));
  }

  const isNeededPagination =
    numberOfPages(numberOfProducts, NUMBER_OF_PRODUCTS_ONE_PAGE) > 1;
  return (
    <>
      <Header />
      <section className={"product-list"}>
        <div className="container ">
          <BreadCrumps />
          <div className="products-list__inner" data-element="mainWrapper">
            <Sidebar />
            <div className="products products-list__main">
              <Search setSearchValue={setSearchValue} />
              <div className="products__search-res">
                <p>{numberOfProducts} results found</p>
                <div className="products__search-btns">
                  <button className="btn btn--only-img btn--violet">
                    <img src={basket} alt={"basket"} onClick={goToCartList} />
                  </button>
                  <button className="btn btn--only-img btn--violet">
                    <img src={heart} alt={"heart"} onClick={goToWishlist} />
                  </button>
                </div>
              </div>
              <CardList products={products} />
              {isNeededPagination ? (
                <Pagination
                  numberOfPages={numberOfPages(
                    numberOfProducts,
                    NUMBER_OF_PRODUCTS_ONE_PAGE
                  )}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
