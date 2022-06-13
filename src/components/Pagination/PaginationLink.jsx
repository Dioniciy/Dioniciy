import { useDispatch } from "react-redux";
import {
  paginationAction,
  SELECT_PRODUCT_PAGE,
} from "../../features/pages/actions";
import classes from "./Pagination.module.scss"

export function PaginationLink({ id, currentId }) {
  const dispatch = useDispatch();
  const defaultClass = classes["pagination__item"];
  const currentClass = id === currentId ? classes["pagination__link--current"] : "";
  return (
    <li className={`${defaultClass} `}>
      <button
        className={`${classes["pagination__link"]} ${currentClass}`}
        onClick={() => dispatch(paginationAction(SELECT_PRODUCT_PAGE, id))}
      />
    </li>
  );
}
