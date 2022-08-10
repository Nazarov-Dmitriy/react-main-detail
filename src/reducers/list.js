import {
    LIST_DETAILS_REQUEST,
    LIST_DETAILS_FAILURE,
    LIST_DETAILS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function skillsReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                    error: null,
            };
        case LIST_DETAILS_FAILURE:
            const {
                error
            } = action.payload;
            return {
                ...state,
                items:[],
                loading: false,
                    error,
            };
        case LIST_DETAILS_SUCCESS:
            const {
                items
            } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                    error: null,
            };
        default:
            return state;
    }
}