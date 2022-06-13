

const NEXT_PRODUCT_PAGE = "NEXT_PRODUCTS_PAGE"
const PREV_PRODUCT_PAGE = "PREV_PRODUCT_PAGE"
const SELECT_PRODUCT_PAGE = "SELECT_PRODUCT_PAGE"
const GO_TO_START = "GO_TO_START"

function paginationAction(type, payload = []){
    return {
        type : type,
        payload
    }
}

export {NEXT_PRODUCT_PAGE, PREV_PRODUCT_PAGE, SELECT_PRODUCT_PAGE, GO_TO_START, paginationAction}