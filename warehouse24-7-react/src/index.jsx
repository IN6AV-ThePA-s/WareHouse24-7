import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'

export const Index = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}
