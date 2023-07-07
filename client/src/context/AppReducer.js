export default (state,action) =>{
    switch(action.type) {
        case 'ADD_TODO':
          return {
            ...state,
            todos: [ ...state.todos,action.payload]
          }
          case 'DELETE_TODO':
          return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
          }
          case 'CHANGE_STATUS':
          
            return {
              ...state,
              todos:state.todos.map(todo => {
                  if(todo.id === action.payload.id){
                    
                    return {...todo,imp : !todo.imp};

                }
                  return {...todo}
              } )
            }
            case 'COMPLETE_STATUS':
              return {
                ...state,
                todos:state.todos.map(todo => {
                  if(todo.id === action.payload.id){
                    return {...todo,complete :!todo.complete}
                  }
                  return {...todo}
                })
              }
        default:
          return state;
      }
}