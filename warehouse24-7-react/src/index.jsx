import React, { Children, createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage/HomePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import { AddUserPage } from './pages/User/AddUserPage'
import { UserPage } from './pages/User/UserPage'
import { UpdateUserPage } from './pages/User/UpdateUserPage'
import { AboutUsPage } from './pages/HomePage/AboutUsPage'
import { LoginPage } from './pages/HomePage/LoginPage'
import { NotFound } from './pages/NotFound/NotFound'
import { WarehousePage } from './pages/Warehouse/WarehousePage'
import { ServicePage } from './pages/Service/ServicePage'
import { AddServicePage } from './pages/Service/AddServicePage'
import { UpdateServicePage } from './pages/Service/UpdateServicePage'

export const Index = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound/>,
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
                        },
                        {
                            path: 'updateUser',
                            element: <UpdateUserPage/>
                        },
                        {
                            path: 'warehouses',
                            element: <WarehousePage/>
                        },
                        {
                            path:'services',
                            element:<ServicePage/>
                        },
                        {
                            path:'addService',
                            element:<AddServicePage/>
                        },
                        {
                            path:'updateService/:id',
                            element:<UpdateServicePage/>
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
