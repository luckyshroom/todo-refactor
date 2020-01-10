const itemList = (state: any[] = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, {
                id: action.id,
                note: action.note,
                content: action.content,
                importance: action.importance,
                deadline: action.deadline,
                completed: null,
                isCompleted: false
            }];
        case 'EDIT_ITEM':
            return state.map(item => item.id === action.id ? {
                ...item,
                content: action.content,
                importance: action.importance,
                deadline: action.deadline
            } : item);
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);
        case 'TOGGLE_ITEM':
            return state.map(item => item.id === action.id ? {
                ...item,
                isCompleted: !item.isCompleted,
                completed: (new Date()).toISOString().split("T")[0]
            } : item);
        default:
            return state
    }
};

export default itemList
