import { CHANGE_SEARCH_VALUE } from "../../features/search";
import { SEARCH_INITIAL_STATE } from "fixtures";

export const sliders = function (state = SEARCH_INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        search: action.payload,
      };
  }
};
