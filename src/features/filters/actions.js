import axios from "axios";
import {addCheckedStatus} from "helpers/addCheckedStatus"
import {URL_CATEGORIES, URL_BRANDS} from 'fixtures'
const CHANGE_CHECKED_FIELD = "CHANGE_CHECKED_FIELD"
const CLEAR_FORM = "CLEAR_FORM"
const GET_FILTERS_SUCCESS = "GET_FILTERS_SUCCESS"


const fieldsAction = (type,payload) => {
    return {
        type: type,
        payload: payload
    }
}

const getFilters = () =>{
    return (dispatch) =>
        axios.all([
            axios.get(URL_CATEGORIES.href)
                .then(res => addCheckedStatus(res.data)),
            axios.get(URL_BRANDS.href)
                .then(res => addCheckedStatus( res.data)),
        ]).then(([categories, brands]) => {
            dispatch(fieldsAction(GET_FILTERS_SUCCESS,{
                categories: categories,
                brands: brands,
            }))
        })
}

export {
    CHANGE_CHECKED_FIELD,
    CLEAR_FORM,
    GET_FILTERS_SUCCESS,
    getFilters,
    fieldsAction
}