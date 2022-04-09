import {createStore} from "redux";
import {Reducer, startState} from "./Reducer";

export const ConfigStore=(store = createStore( Reducer, startState )) => {
    return store;

};