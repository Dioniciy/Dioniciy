import { Field } from "./Field/Field";
import classes from './Sidebar.module.scss'

export function FilterList({ title, filters }) {
  return (
    <div className={classes['sidebar__filter']}>
      <h3>
        <strong>{title}</strong>
      </h3>
      {filters.map((filter) => {
        return (
          <Field
            key={filter.name}
            name={filter.name}
            value={filter.name}
            isChecked={filter.isChecked}
            type={title}
          />
        );
      })}
    </div>
  );
}
