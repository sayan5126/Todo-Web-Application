import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {}      //ojbect structure--->>> id: 1,
                //                       todoMsg: "Todo msg",
                //                       completed : false
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}