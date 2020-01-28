/**
 * Login reducer
 */

import { auth } from '../Actions/Types'

const initialState = {
    loggedIn: false,
    loading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.LOGIN:
            return {
                ...state,
                loading: true,
            }

        default:
            return state
    }
}

export default userReducer
