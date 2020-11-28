import { combineReducers } from 'redux'
import AddCourse from './AddCourse'

const rootReducer = combineReducers({
    addCourse: AddCourse
})

export default rootReducer