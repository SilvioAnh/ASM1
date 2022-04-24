import *as ActionTypes from "./ActionType";
//import { DISHES } from '../shared/dishes';
import {baseUrl} from "../shared/baseUrl";

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
    dispatch(dishesLoading(true)); // dispatch kiem tra xem dishesLoading co dung khong

    return fetch(baseUrl + 'dishes')
        .then(response => { // xu ly phan hoi loi tu may chu
            if(response.ok){
                return response;
            }else{
                let error = new Error("Error"+ response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => { //xu ly khi khoong co phan hoi tu may chy
            let errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {dispatch(dishesFailed(error.message))})
     // setTimeout(()=>{// mo phong giao tiep voi may chu
     //     dispatch(addDishes(DISHES)) // gui du lieu den addDishes va day DISHES  vao state trong store
     // }, 2000)

}
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if(response.ok){
                    return response;
                }else{
                    let error = new Error("Error"+ response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => {dispatch(commentsFailed(error.message))})

};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
export const fetchPromos =  () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => {
                if(response.ok){
                    return response;
                }else{
                    let error = new Error("Error"+ response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {dispatch(promosFailed(error.message))})
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});


export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});








