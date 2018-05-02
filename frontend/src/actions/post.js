const uuidv1 = require('uuid/v1');
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

export function findAll() {
    return async (dispatch) => {
        const response = await fetch('http://localhost:3001/posts', {
            headers: {'Authorization': 'whatever-i-want'}
        });
        const json = await response.json();
        dispatch({
            type: SET_POSTS,
            posts: json
        });
    }
}
export function findAllByCategory(categoryName) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/${categoryName}/posts`, {
            headers: {'Authorization': 'whatever-i-want'}
        });
        const json = await response.json();
        dispatch({
            type: SET_POSTS,
            posts: json
        });
    }
}

export function saveOrUpdate(post) {
    if(!post.timestamp){
        post.timestamp = Date.now();
    }
    if(!post.id){
        post.id = uuidv1();
    }
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Authorization': 'whatever-i-want',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: SET_POST,
            post: json
        });
    }
}

export function upOrDownVote(upOrDown, id) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({option: upOrDown}),
            headers: {
                'Authorization': 'whatever-i-want',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        dispatch({
            type: SET_POST,
            post: json
        });
    }
}