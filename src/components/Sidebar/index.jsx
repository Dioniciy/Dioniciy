import { FilterList } from "./FilterList";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../features/filters/selectors";
import { CLEAR_FORM, getFilters } from "../../features/filters/actions";
import { DoubleSlider } from "../DoubleSlider";
import { useEffect } from "react";
import { SLIDERS_INITIAL_STATE } from "fixtures";
import classes from './Sidebar.module.scss'

export function Sidebar() {
  const filtersState = useSelector(selectFilters);
  const filterListsProps = Object.entries(filtersState);
  const sliders = Object.values(SLIDERS_INITIAL_STATE);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilters());
  }, []);

  return (
    <aside className={classes.sidebar} data-element="body">
      <div className={classes['sidebar__head']}>
        <h3>Filters</h3>
      </div>
      <div className={classes['sidebar__range-sliders']} data-element="slidersWrapper">
        {sliders.map((slider) => (
          <DoubleSlider
            key={slider.id}
            type={slider.type}
            min={slider.min}
            max={slider.max}
            fraction={slider.fraction}
            step={slider.step}
          />
        ))}
      </div>
      <form className={classes['sidebar__form']} data-element="form">
        {filterListsProps.map((data) => (
          <FilterList key={data[0]} title={data[0]} filters={data[1]} />
        ))}
      </form>
      <button
        className="btn btn--large-font btn--violet btn--full-width"
        data-element="button"
        onClick={() => dispatch({ type: CLEAR_FORM })}
      >
        CLEAR ALL FILTERS
      </button>
    </aside>
  );
}
