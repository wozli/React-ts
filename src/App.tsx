import React, {useEffect, useState} from 'react';

import {Route, BrowserRouter, NavLink} from 'react-router-dom'
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";
import EventPage from "./pages/EventPage";
import UserItemPage from "./pages/UserItemPage";
import Hooks from "./pages/Hooks";


const App = () => {


    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to='/users' style={{marginRight: 15}}>users</NavLink>
                    <NavLink to='/todos' style={{marginRight: 15}}>todos</NavLink>
                    <NavLink to='/events' style={{marginRight: 15}}>events</NavLink>
                    <NavLink to='/hooks' style={{marginRight: 15}}>custom hooks</NavLink>
                </div>
                <Route exact path={'/users'}>
                    <UsersPage/>
                </Route>
                <Route exact path={'/todos'}>
                    <TodosPage/>
                </Route>
                <Route exact path={'/events'}>
                    <EventPage/>
                </Route>
                <Route exact path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route exact path={'/hooks'}>
                    <Hooks/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;