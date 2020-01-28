import { error } from '../Actions/Types'

const id = () =>
    Math.random()
        .toString(36)
        .substr(2)

const initialState = {
    errorId: 0,
    errorMessage: '',
    messageId: 0,
    messageMessage: '',
}

const errorReducer = (state = initialState, action) => {
    if (action.error && action.error.response && action.error.response.data.message) {
        return {
            ...state,
            errorId: id(),
            errorMessage: action.error.response.data.message,
        }
    }

    switch (action.type) {
        case error.MESSAGE:
            return {
                ...state,
                messageId: id(),
                message: action.message,
            }

        case error.ERROR:
            return {
                ...state,
                errorId: id(),
                errorMessage: action.message,
            }

        default:
            return state
    }
}

export default errorReducer
