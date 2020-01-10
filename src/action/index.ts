export const addItem = (id, note, content, importance, deadline) => ({
    type: 'ADD_ITEM',
    id,
    note,
    content,
    importance,
    deadline
});

export const editItem = (id, content, importance, deadline) => ({
    type: 'EDIT_ITEM',
    id,
    content,
    importance,
    deadline
});

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleItem = id => ({
    type: 'TOGGLE_ITEM',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_USUAL: 'SHOW_USUAL',
    SHOW_INCREASED: 'SHOW_INCREASED',
    SHOW_HIGH: 'SHOW_HIGH'
};
