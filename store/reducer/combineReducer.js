import {combineReducers} from 'redux'
import authReducers from './authReducer'

import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    auth: authReducers,
    cart:cartReducer
})

export default rootReducer