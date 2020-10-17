import todosReducer from './todos'
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    todosReducer: todosReducer
})

export default allReducers