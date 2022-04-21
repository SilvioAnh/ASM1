import *as ActionTypes from "./ActionType";
import { DISHES } from '../shared/dishes';

export const addComment = ({dishId, rating, author, comment}) =>({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
}
})
export const fetchDishes =  () => (dispatch) => {
    dispatch(dishesLoading(true)); // dispatch kiem tra xem dishesLoading co dung khon
     setTimeout(()=>{
         dispatch(addDishes(DISHES)) // gui du lieu den addDishes va day DISHES  vao state trong store
     }, 2000)
}
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
