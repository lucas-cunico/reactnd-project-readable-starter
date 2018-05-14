import {SET_COMMENTS} from '../actions/comment';
const initialState = {
    comments: [],
    comment: {
        title: "",
        author: "",
        category: "",
        commentCount: 0,
        id: "",
    }
};
export default (state = initialState, payload) => {
    switch (payload.type) {
        case SET_COMMENTS:
            const {comments} = payload;
            return {...state, ...{comments}};
        default:
            return state;
    }

}