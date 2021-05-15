import React from 'react';
import {ITodo} from "../types/types";

interface TodoProps {
    todo: ITodo
}

const Todo: React.FC<TodoProps> = ({todo}) => {
    return (
        <div>
            {todo.id}. Название: {todo.title}, статус: <input type="checkbox" defaultChecked={todo.completed}/>
        </div>
    );
};

export default Todo;