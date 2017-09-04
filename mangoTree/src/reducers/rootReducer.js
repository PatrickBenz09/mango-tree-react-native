import { combineReducers } from 'redux'

import userReducer from './userReducer'
import mangoReducer from './mangoReducer'

export default combineReducers({
  userStore: userReducer,
  mangoStore: mangoReducer
})
