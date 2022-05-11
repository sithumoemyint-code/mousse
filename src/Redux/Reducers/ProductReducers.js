import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../Constants/ProductConstants"

// ALL PRODUCT LIST
export const productsListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCTS_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCTS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
