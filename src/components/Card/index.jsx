import "style.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../features/products/actions";
import heart from "img/icons/heart.svg";
import heartPainted from "img/icons/heart-painted.svg";
import basket from "img/icons/bag.svg";
import crossBasket from "img/icons/delete-from-cart.svg";
import star from "img/icons/star.svg";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import classes from "./Card.module.scss"

export default function Card({ product, isCart }) {
  const dispatch = useDispatch();
  const handleAddToWishList = () => {
    dispatch(addToWishlist(product.id));
  };

  const handleRemoveFromWishList = () => {
    dispatch(removeFromWishlist(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, uniqId: uuid() }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.uniqId));
  };
  return (
    <article className={`${classes['product-card']} ${classes['product-card--with-rating']}`}>
      <div className={classes['product-card__main']}>
        <div className={classes['product-card__img']}>
          <img src={`${product.images[0]}`} alt={"product"} />
        </div>
        <div className={classes['product-card__info']}>
          <div className={classes['product-card__wr']}>
            <div className={classes['product-card__rating']}>
              <span>{product.rating}</span>

              <img src={star} alt="rating-star" />
            </div>
            <div className={classes['product-card__price']}>${product.price}</div>
          </div>
          <Link
            to={`/product/${product.id}`}
            className={classes['product-card__description']}
          >
            <h3>{product.title}</h3>
            <p>Redesigned from scratch and completely revised.</p>
          </Link>
        </div>
      </div>
      <div className={classes['product-card__btns']}>
        <button
          aria-label={
            product.isWished ? "remove from wishlist" : "add to wishlist"
          }
          className={classes['product-card__btn'] + ' btn'}
          onClick={
            product.isWished ? handleRemoveFromWishList : handleAddToWishList
          }
        >
          <img src={product.isWished ? heartPainted : heart} alt="heart" />
          <span>WISHLIST</span>
        </button>

        <button
          aria-label={isCart ? "remove from cart" : "add to cart"}
          className={classes['product-card__btn'] + ' btn btn--violet'}
          onClick={isCart ? handleRemoveFromCart : handleAddToCart}
        >
          <img src={isCart ? crossBasket : basket} alt="cart" />
          <span>{isCart ? "REMOVE FROM CART" : "ADD TO CART"}</span>
        </button>
      </div>
    </article>
  );
}
