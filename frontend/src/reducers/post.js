import {SET_POSTS, SET_POST} from '../actions/post';
const initialState = {
    posts: []
};
export default (state = initialState, payload) => {
    switch (payload.type) {
        case SET_POSTS:
            const {posts} = payload;
            return {...state, ...{posts}};
        case SET_POST:
            const {post} = payload;
            let newPosts = state.posts;
            let newPost = newPosts.find(postFromArray => postFromArray.id === post.id);
            if(newPost){
                newPosts.forEach((postFromArray, index) => {
                    if(postFromArray.id === post.id){
                        newPosts[index] = post;
                    }
                });
            }else{
                newPosts.push(post)
            }
            return {...state, ...{posts: newPosts}};
        default:
            return state;
    }

}