import {SET_POSTS} from '../actions/post';
const initialState = {
    posts: []
};
export default (state = initialState, payload) => {
    switch (payload.type) {
        case SET_POSTS:
            const {posts} = payload;
            return {...state, ...{posts}};
        default:
            return state;
    }

}