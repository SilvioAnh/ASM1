import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comment';
import { PROMOTIONS } from '../shared/promotion';
import { LEADERS } from '../shared/leader';

export const initiaState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
};

export const Reducer = (state = initiaState, action) => {
    return state;
};