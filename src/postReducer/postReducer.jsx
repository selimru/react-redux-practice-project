import { DATA_ERROR, DATA_FECTCHING, DATA_REQUEST } from "../ActionTupes/ActionTypes";

const initialState = {
    loading: false,
    posts: [],
    error: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                loading: true,
            }
        case DATA_FECTCHING:
            return {
                loading: false,
                posts: action.payload,
                error: false
            }
        case DATA_ERROR:
            return {
                posts: [],
                error: action.payload

            }
        default:
            return state;
    }
}

export default postReducer;