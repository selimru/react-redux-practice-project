import { DATA_ERROR, DATA_FECTCHING, DATA_REQUEST } from "../ActionTupes/ActionTypes"

export const getAllPosts = () => async (dispatch) => {
    dispatch({ type: DATA_REQUEST })
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: DATA_FECTCHING,
                    payload: data
                })
            })
    } catch (error) {
        dispatch({ type: DATA_ERROR, payload: error.message })

    }


}