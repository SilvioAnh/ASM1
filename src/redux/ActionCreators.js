import *as ActionTypes from "./ActionType";
//import { DISHES } from '../shared/dishes';
import {baseUrl} from "../shared/baseUrl";

// cho phép tìm nạp thông tin leaders từ máy chủ và cập nhật redux
export const adddLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,

});
export const fetchLeaders = () => (dispatch) => {
    //dispatch(leadersLoading());

    return fetch(baseUrl + "leaders")
        .then(response => {
            if(response.ok){
                return response;
            }else{
                let error = new Error("Error" + response.status + ":" + response.statusText)
                error.response = response;
                throw  error;
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.json())
        .then( leaders => dispatch(adddLeaders(leaders)))
        .catch( error => dispatch(leadersFailed(error.message)))

}
export const leadersFailed = errmess => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess,
})
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,
});



export const addComment = (comment) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
})
export const postFeedback = (feedback) => (dispatch)=>{
  return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers:{
            'Content-Type' : 'application/json'
        },
      credentials: "same-origin"
  })
      .then(response => {
          if(response.ok){
              return response
          }else {
              var error = new Error('Error' + response.status + ':' + response.statusText);
              error.responsr = response;
              throw error;
          }
      },
          error => {
          throw error;
          } )
      .then(response => response.json())
      .then(response => {console.log('feadback',response); alert("Thank you for your feedback!\n" + JSON.stringify(response))})
      .catch(error => {console.log('feedback', error.message); alert("Feadback your not be posted\n Error: " + error.message)})
}
export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }
    newComment.date= new Date().toISOString();
    return fetch(baseUrl + "comments", {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'Content-Type' : 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
    }
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
        error => { //xu ly khi khoong co phan hoi tu may chu
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








