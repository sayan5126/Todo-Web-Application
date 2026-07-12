import { useState } from "react";
import { useTodoContext } from "../context";

export default function TodoForm() {
    const [todoMsg , setTodoMsg] = useState("")
    const {addTodo} = useTodoContext()
    const add = (e) => {
        e.preventDefault()
        if(!todoMsg) return
        addTodo({todoMsg : todoMsg , completed : false})
        setTodoMsg("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}


