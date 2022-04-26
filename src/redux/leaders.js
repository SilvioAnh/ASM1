//import { LEADERS } from '../shared/leader';
import *as ActionTypes from "./ActionType";

// update phản hồi vào hành động Redux, xử lý tải và lỗi khi lấy thông tin từ server
export const Leaders =  (state = {
    isLoading:true,
    errMess: null,
    leaders: []
},action) =>{
    switch (action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: false, errMess: null, leaders: []};
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}