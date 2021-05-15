import React, {FC} from 'react';
import {IUser} from "../types/types";
import {NavLink} from 'react-router-dom'

interface UserItemProps {
    user: IUser
}

const UserItem:React.FC<UserItemProps> = ({user}) => {
    return (

            <NavLink to={`/users/${user.id}`} style={{padding: 15, border: '1px solid gray', display: 'block'}}>
                {user.id}. {user.name} проживает {user.address.city}, улица {user.address.street}
            </NavLink>
    );
};

export default UserItem;