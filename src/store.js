import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { counterReducer } from "./reducers/counterReducer";

const reducers = combineReducers({

    contador: counterReducer

})

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers, 
    composeEnhancers(
      applyMiddleware(thunk))

)


