import {NEXT_PRODUCT_PAGE, PREV_PRODUCT_PAGE, SELECT_PRODUCT_PAGE, GO_TO_START} from "./actions";
import {INITIAL_STATE_PAGINATION} from "fixtures"

export function pages(state = INITIAL_STATE_PAGINATION , action){
    switch (action.type){
        case SELECT_PRODUCT_PAGE:
            return {...state, currentPage: action.payload}
        case NEXT_PRODUCT_PAGE:
            return {...state, currentPage: state.currentPage + 1}
        case PREV_PRODUCT_PAGE:
            return {...state, currentPage: state.currentPage - 1}
        case GO_TO_START:
            return INITIAL_STATE_PAGINATION
        default:
                return state
    }
}

