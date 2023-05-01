import React, { useEffect, useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage/HomePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import { AddUserPage } from './pages/User/AddUserPage'
import { UserPage } from './pages/User/UserPage'
import { UpdateUserPage } from './pages/User/UpdateUserPage'
import { AboutUsPage } from './pages/HomePage/AboutUsPage'
import { LoginPage } from './pages/HomePage/LoginPage'

export const AuthContext = createContext()

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        names: '',
        username: '',
        role: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token) setLoggedIn(true)
    }, [])
    

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/about',
                    element: <AboutUsPage/>
                },
                {
                    path: '/login',
                    element: <LoginPage/>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard/>,
                    children: [
                        {
                            path: 'users',
                            element: <UserPage/>
                        },
                        {
                            path: 'addUser',
                            element: <AddUserPage/>
                        },{
                            path: 'updateUser/:id',
                            element: <UpdateUserPage/>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
