import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import Todo from "../components/Todo";
import List from "../components/List";

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodo();
    }, []);


    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>Todos</h1>
            <List items={todos} renderItem={(todo: ITodo) => <Todo key={todo.id} todo={todo}/>}/>
        </div>
    );
};

export default TodosPage;