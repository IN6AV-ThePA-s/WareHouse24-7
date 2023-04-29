import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import { AddUserPage } from './pages/User/AddUserPage'
import { UserPage } from './pages/User/UserPage'

export const Index = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />,
                    children: [
                        {
                            path: 'users',
                            element: <UserPage/>
                        },
                        {
                            path: 'addUser',
                            element: <AddUserPage/>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <RouterProvider router={routes} />
    )
}
