import { useDispatch } from "react-redux";
import {
  CHANGE_CHECKED_FIELD,
  fieldsAction,
} from "../../../features/filters/actions";
import { GO_TO_START, paginationAction } from "../../../features/pages/actions";
import sidebarClasses from '../Sidebar.module.scss'
import classes from './Field.module.scss'

export function Field({ value, isChecked, type }) {
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch(fieldsAction(CHANGE_CHECKED_FIELD, { value: value, type: type }));
    dispatch(paginationAction(GO_TO_START));
  };
  return (
    <label
      className={`${classes['field']} ${classes['field--checkbox']} ${sidebarClasses['sidebar__field']}`}
      data-element="field"
    >
      <input
        type="checkbox"
        checked={isChecked}
        value={value}
        onChange={toggleCheckbox}
      />
      <span className={classes['field__checkbox-substitute']}></span>
      <span className={classes['field__info']}>
        <span className={classes['field__name']}>{value}</span>
      </span>
    </label>
  );
}
