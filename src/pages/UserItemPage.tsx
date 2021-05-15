import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from 'react-router-dom'

interface UserItemPageParams {
    id:string,
}

const UserItemPage: FC = () => {

    const params = useParams<UserItemPageParams>();
    const history = useHistory();

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>back</button>
            <div>User: {user?.name}</div>
            <div>Email: {user?.email}</div>
            <div>Address: {user?.address.city}</div>

        </div>
    );
};

export default UserItemPage;