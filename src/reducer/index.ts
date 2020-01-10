import counter from './counter'
import itemList from './itemList'
import visibilityFilter from './visibilityFilter'
import {combineReducers} from 'redux'

export default combineReducers({
    counter,
    itemList,
    visibilityFilter
})
