import List from './List'
import {connect} from 'react-redux'
import {deleteItem, toggleItem} from '../action'
import {VisibilityFilters} from '../action'

export const connector = connect(
    (state: any) => ({
        itemList: getVisibleItems(state.itemList, state.visibilityFilter)
    }),
    dispatch => ({
        deleteItem: id => dispatch(deleteItem(id)),
        toggleItem: id => dispatch(toggleItem(id))
    })
);

const getVisibleItems = (rows, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return rows;
        case VisibilityFilters.SHOW_USUAL:
            return rows.filter(t => t.importance === 'Usual');
        case VisibilityFilters.SHOW_INCREASED:
            return rows.filter(t => t.importance === 'Increased');
        case VisibilityFilters.SHOW_HIGH:
            return rows.filter(t => t.importance === 'High');
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

export default connector(List)
