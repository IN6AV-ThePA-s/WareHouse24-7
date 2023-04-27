import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'

export const Index = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}
