const todosReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'DELETE_TODO':
            return state
        default:
            return state;
    }
}

export default todosReducer;