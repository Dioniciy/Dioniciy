import {CHANGE_SLIDER_RANGE} from "./actions";
import {CLEAR_FORM} from "../filters/actions";
import {SLIDERS_INITIAL_STATE} from "fixtures";

export const sliders = function (state = SLIDERS_INITIAL_STATE, action){
        switch (action.type){
            case CHANGE_SLIDER_RANGE:
                return {
                    ...state,
                    [action.payload.type]: {
                        currentMin: action.payload.min,
                        currentMax: action.payload.max,
                    }
                }
            case CLEAR_FORM:
                return state
            default:
                return state
        }
}

