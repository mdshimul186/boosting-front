import {createStore, applyMiddleware, compose} from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducer/combineReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const init ={}
const middleware = [Thunk]
const store = createStore(rootReducer,init,composeWithDevTools(applyMiddleware(...middleware)))

 export default store

//  ,
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())