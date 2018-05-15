import swal from 'sweetalert';
import {push} from 'react-router-redux';

const uuidv1 = require('uuid/v1');
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function findAllByPost(id) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/posts/${id}/comments`, {
            headers: {'Authorization': 'whatever-i-want'}
        });
        const json = await response.json();
        dispatch({
            type: SET_COMMENTS,
            comments: json
        });
    }
}

export function deleteComment(id) {
    return (dispatch) => {
        swal({
            title: "Are you sure?",
            text: "Delete this comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:3001/comments/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'whatever-i-want'
                    }
                }).then(() => {
                    dispatch({
                        type: DELETE_COMMENT,
                        id
                    });
                    swal("Deleted!", {
                        icon: "success",
                    });
                });
            }
        });
    }
}

export function upOrDownVote(upOrDown, id) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/comments/${id}`, {
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
            type: SET_COMMENT,
            comment: json
        });
    }
}