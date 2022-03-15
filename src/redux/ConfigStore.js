import {createStore} from "redux";
import {Reducer, initiaState} from "./Reduceer";

export const ConfigureStore = ()=>{
    const store = createStore(
        Reducer,
        initiaState,
    )
    return (store);
}