import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import reduxThunk from "redux-thunk"
import handlePage1 from "@/store/Page1_States/reducer"
import handlePage2 from "@/store/Page2_States/reducer"

const reducers = combineReducers({
    handlePage1,
    handlePage2
})
// create data manager and show devtools
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// judge the existence of__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt

// connect redux-thunk and reducer
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
export default store