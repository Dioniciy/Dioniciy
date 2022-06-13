import { Link } from "react-router-dom";
import classes from './BreadCrumps.module.scss'

export function BreadCrumps() {
  return (
    <ul className={ 'products-list__bread-cramps' + ' ' + classes['bread-cramps']}>
      <li className={classes['bread-cramps__item']}>
        <Link className={classes['bread-cramps__link']} to="/">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 6.25L8.61984 1L16.2397 6.25V14.5C16.2397 15.3284 15.4816 16 14.5464 16H2.6933C1.75811 16 1 15.3284 1 14.5V6.25Z"
              stroke="#7E72F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.68909 16V8H11.5505V16"
              stroke="#7E72F2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
      <li className={classes['bread-cramps__item']}>
        <Link className={classes['bread-cramps__link']} to="/eCommerce">
          eCommerce
        </Link>
      </li>
      <li className={classes['bread-cramps__item']}>
        <Link className={classes['bread-cramps__link']} to="/Electronics">
          Electronics
        </Link>
      </li>
    </ul>
  );
}
