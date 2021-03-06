import {SET_CATEGORIES} from '../actions/category';
const initialState = {
    categories: []
};
export default (state = initialState, payload) => {
    switch (payload.type) {
        case SET_CATEGORIES:
            const {categories} = payload;
            return {...state, ...{categories}};
        default:
            return state;
    }

}