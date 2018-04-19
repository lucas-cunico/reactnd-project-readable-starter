export const SET_POSTS = 'SET_POSTS';

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