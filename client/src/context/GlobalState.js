import { createContext,useReducer } from "react"
import AppReducer from './AppReducer';

const initialTodos = {
    todos:[
        {
            id: 1,
            title: "Todo 1",
            complete: false,
            imp:false,

          },
          {
            id: 2,
            title: "Todo 2",
            complete: false,
            imp:false,
          },
    ],
}
//Creating Context

export const GlobalContext = createContext(initialTodos);

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialTodos);
   
    function addTodo(todo){
        dispatch({
            type:'ADD_TODO',
            payload:todo
        });
    }
    function changeStatus(id,checked){
        dispatch({
            type:'CHANGE_STATUS',
            payload:id
        })
  
    }
    function deleteTodo(id){
        dispatch({
            type:'DELETE_TODO',
            payload:id
        })
    }
    function completeStatus(id,val){
        dispatch({
            type:'COMPLETE_STATUS',
            payload:{id,val}
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                todos:state.todos,
                addTodo,deleteTodo,changeStatus,completeStatus
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}