import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './inputReducer';
import history from './historyReducer'

const rootReducer = combineReducers({
    counter,
    input,
    history,
})

export default rootReducer;