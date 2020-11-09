import {createStore,applyMiddleware} from "redux";
import reducers from "./reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const Store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));