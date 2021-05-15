import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "../components/List";
import UserItem from "../components/UserItem";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>Users</h1>
            <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
        </div>
    );
};

export default UsersPage;