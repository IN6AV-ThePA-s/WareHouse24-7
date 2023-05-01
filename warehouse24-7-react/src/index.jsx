import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage/HomePage'
import { Dashboard } from './pages/DashboardPage/Dashboard'
import { AddUserPage } from './pages/User/AddUserPage'
import { UserPage } from './pages/User/UserPage'
import { UpdateUserPage } from './pages/User/UpdateUserPage'
import { AboutUsPage } from './pages/HomePage/AboutUsPage'
import { ServicePage } from './pages/Service/ServicePage'
import { AddServicePage } from './pages/Service/AddServicePage'
import { UpdateServicePage } from './pages/Service/UpdateServicePage'

export const Index = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                /* {
                    path: '/about',
                    element: <AboutUsPage/>
                }, */
                /* {
                    path: 'login',
                    element
                }, */
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
                            path: 'updateUser',
                            element: <UpdateUserPage/>
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
