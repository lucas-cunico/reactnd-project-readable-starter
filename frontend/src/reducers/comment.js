import {SET_COMMENTS, SET_COMMENT} from '../actions/comment';
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
        case SET_COMMENT:
            const {comment} = payload;
            let newComments = state.comments;
            let newComment = newComments.find(commentFromArray => commentFromArray.id === comment.id);
            if(newComment){
                newComments.forEach((commentFromArray, index) => {
                    if(commentFromArray.id === comment.id){
                        newComments[index] = comment;
                    }
                });
            }else{
                newComments.push(comment)
            }
            return {...state, ...{comments: newComments}, ...{comment}};
        default:
            return state;
    }

}