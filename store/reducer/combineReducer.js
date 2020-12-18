import {combineReducers} from 'redux'
import authReducers from './authReducer'
import checkoutReducer from './checkoutReducer'

import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    auth: authReducers,
    checkout:checkoutReducer,
    cart:cartReducer
})

export default rootReducer