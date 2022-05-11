import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { categoryListReducer, subCategoryListReducer } from "./Reducers/CategoryReducers"
import { productsListReducer } from "./Reducers/ProductReducers"

const reducer = combineReducers({
    categoryList: categoryListReducer,
    subCategoryList: subCategoryListReducer,
    productsList: productsListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store