import search from "img/icons/search.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { debounce } from "helpers/debounce";
import { changeSearchValue } from "features/search/action";
import classes from './Search.module.scss'

export function Search({ setSearchValue }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function updateSearchValue(value) {
    setSearchValue(value);
  }

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(changeSearchValue(value));
  };
  return (
    <form
      className={classes.search}
      onSubmit={(e) => {
        onSearch(e);
        updateSearchValue(value);
      }}
    >
      <input
        type="text"
        placeholder="Search"
        data-element="input"
        onChange={debounce((e) => setValue(e.target.value))}
      />
      <button data-element="submit">
        <img src={search} alt="search" />
      </button>
    </form>
  );
}
