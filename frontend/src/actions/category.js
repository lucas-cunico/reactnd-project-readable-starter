export const SET_CATEGORIES = 'SET_CATEGORIES';

export function findAll() {
    return async (dispatch) => {
        const response = await fetch('http://localhost:3001/categories', {
            headers: {'Authorization': 'whatever-i-want'}
        });
        const json = await response.json();
        const {categories} = json;
        dispatch({
            type: SET_CATEGORIES,
            categories
        });
    }
}