import { createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

const middleware = applyMiddleware(logger, thunk)

export default createStore(rootReducer, middleware)
