const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
function changeSearchValue(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

export { changeSearchValue, CHANGE_SEARCH_VALUE };
