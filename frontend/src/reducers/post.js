import {SET_POSTS, SET_POST, DELETE_POST} from '../actions/post';
const initialState = {
    posts: [],
    post: {
        title: "",
        author: "",
        category: "",
        commentCount: 0,
        voteScore: 0,
        id: "",
    }
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
            return {...state, ...{posts: newPosts}, ...{post}};
        case DELETE_POST:
            const {id} = payload;
            return {...state, ...{posts: state.posts.filter(e => e.id !== id)}};
        default:
            return state;
    }

}