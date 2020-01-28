/**
 * Root reducer
 */

import { combineReducers } from 'redux'

// login reducer
import user from './user'
import error from './error'

// export root reducer
export default combineReducers({
    user,
    error,
})
