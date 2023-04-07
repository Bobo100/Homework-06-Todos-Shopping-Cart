import Head from "next/head";
import Layout from '../components/layout';
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import store from "../components/redux/store/store";
import { Todo_ActionType } from "../components/redux/action/actionType";
import uuid from "react-uuid";


function HomePage() {
    const todoList = useSelector((state: any) => state.todo_reducer.toDoList);
    console.log(todoList)

    const [inputValue, setInputValue] = useState("")

    const addTodo = () => {
        console.log("addTodo")
        if (inputValue === "") return
        store.dispatch({ type: Todo_ActionType.ADD_TODO, payload: { id: uuid(), toDoItem: inputValue, isDone: false } })
    }

    const deleteTodo = (index: number) => {
        console.log("deleteTodo")
        store.dispatch({ type: Todo_ActionType.DELETE_TODO, payload: index })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    // 完成按鈕
    const handleOnCheck = (index: number) => {
        console.log("handleOnCheck")
        store.dispatch({ type: Todo_ActionType.CHECK_TODO, payload: index })
    }

    const [filter, setFilter] = useState("all")
    const filteredTodoList = useMemo(() => {
        switch (filter) {
            case "active":
                return todoList.filter((item) => !item.isDone);
            case "completed":
                return todoList.filter((item) => item.isDone);
            default:
                return todoList;
        }
    }, [filter, todoList]);

    return (
        <Layout>
            <Head>
                <title>To-DO List</title>
            </Head>
            <div>
                <h1 className="text-3xl font-bold m-1">
                    To-DO List
                </h1>

                <div className="m-1">
                    <input type="text" className="border-2 border-black m-1 text-black" placeholder="想做甚麼" onChange={handleOnChange} />
                    <button className="border-2 border-white m-1 p-1" onClick={addTodo}>Add</button>
                </div>

                <button className="p-3 m-3" onClick={() => setFilter("all")}>All</button>
                <button className="p-3 m-3" onClick={() => setFilter("active")}>Active</button>
                <button className="p-3 m-3" onClick={() => setFilter("completed")}>Completed</button>

                {filteredTodoList.map((item: any, index: number) => {
                    return (
                        <div key={uuid()} className="m-1">
                            <input
                                type="checkbox"
                                className="m-1"
                                placeholder="check"
                                checked={item.isDone}
                                onChange={() => {
                                    handleOnCheck(item.id);
                                }}
                            />
                            <span className="m-1">{item.toDoItem}</span>
                            <button
                                className="border-2 border-white m-1 p-1"
                                onClick={() => deleteTodo(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}


                {/* {todoList &&
                    todoList.map((item: any, index: number) => {
                        return (
                            <div key={uuid()} className="m-1">
                                <input type="checkbox" className="m-1" placeholder="check" checked={item.isDone} onChange={() => { handleOnCheck(index) }} />
                                <span className="m-1">{item.toDoItem}</span>
                                <button className="border-2 border-white m-1 p-1" onClick={() => deleteTodo(index)}>Delete</button>
                            </div>
                        )
                    })
                } */}

            </div>
        </Layout >
    )
}

export default HomePage