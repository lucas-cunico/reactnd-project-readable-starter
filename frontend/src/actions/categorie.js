export const SET_CATEGORIES = 'SET_CATEGORIES';

export function findAll() {
    return (dispatch) => {
        fetch('localhost:3001/categories', {
                headers: {'Authorization': 'whatever-i-want'}
            }).then((resp) => {
            const {categories} = resp.data;
            dispatch({
                type: SET_CATEGORIES,
                categories
            });
        });
    }
}