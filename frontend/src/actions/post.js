import swal from 'sweetalert';
const uuidv1 = require('uuid/v1');
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';
export const DELETE_POST = 'DELETE_POST';


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

export function find(id) {
    return async (dispatch) => {
        fetch(`http://localhost:3001/posts/${id}`, {
            headers: {'Authorization': 'whatever-i-want'}
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((json) => {
                    dispatch({
                        type: SET_POST,
                        post: json
                    });
                })
            }
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
    if (!post.timestamp) {
        post.timestamp = Date.now();
    }
    return async (dispatch) => {
        if (!post.id) {
            post.id = uuidv1();
            fetch(`http://localhost:3001/posts`, {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Authorization': 'whatever-i-want',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((json) => {
                dispatch({
                    type: SET_POST,
                    post: json
                });
                swal("Created!", {
                    icon: "success",
                });
            });

        } else {
            fetch(`http://localhost:3001/posts/${post.id}`, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    'Authorization': 'whatever-i-want',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((json) => {
                dispatch({
                    type: SET_POST,
                    post: json
                });
                swal("Updated!", {
                    icon: "success",
                });
            });

        }
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

export function deletePost(id, history) {
    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "Delete this post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:3001/posts/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'whatever-i-want'
                    }
                }).then(() => {
                    dispatch({
                        type: DELETE_POST,
                        id
                    });
                    swal("Deleted!", {
                        icon: "success",
                    });
                    if(history){
                        history.push('/');
                    }
                });
            }
        });
    }
}