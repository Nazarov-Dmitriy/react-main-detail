import {
    DETAILS_REQUEST,
    DETAILS_FAILURE,
    DETAILS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    item: [],
    loading: false,
    error: null,
};

export default function skillsReducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                    error: null,
            };
        case DETAILS_FAILURE:
            const {
                error
            } = action.payload;
            return {
                ...state,
                loading: false,
                    error,
            };
        case DETAILS_SUCCESS:
            const {
                item
            } = action.payload;
            return {
                ...state,
                item,
                loading: false,
                    error: null,
            };
        default:
            return state;
    }
}