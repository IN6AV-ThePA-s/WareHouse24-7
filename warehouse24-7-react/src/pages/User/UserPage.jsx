import React from 'react'
import logo from '../../assets/logo.png'
import photo from '../../assets/property-1.jpg'
import { Link } from 'react-router-dom'

export const UserPage = () => {
    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Users</h1>
                <Link to='/dashboard/addUser'>
                    <button className='btn btn-success me-5 bi bi-plus-circle'> Add User</button>
                </Link>
                
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Names</th>
                            <th scope="col">Surnames</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Photo</th>
                            <th scope="col" className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='align-middle'>
                        <tr>
                            <td>Gerson Aarón</td>
                            <td>Matta Aguilar</td>
                            <td>12345678</td>
                            <td>gmatta-2021223@kinal.edu.gt</td>
                            <td>gmatta-2021223</td>
                            <td><img src={logo} width='50rem' height='50rem' /></td>
                            <td className='text-center'>
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Gerson Aarón</td>
                            <td>Matta Aguilar</td>
                            <td>12345678</td>
                            <td>gmatta-2021223@kinal.edu.gt</td>
                            <td>gmatta-2021223</td>
                            <td><img src={photo} width='50rem' height='50rem' /></td>
                            <td className='text-center'>
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Gerson Aarón</td>
                            <td>Matta Aguilar</td>
                            <td>12345678</td>
                            <td>gmatta-2021223@kinal.edu.gt</td>
                            <td>gmatta-2021223</td>
                            <td><img src={photo} width='50rem' height='50rem' /></td>
                            <td className='text-center'>
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}
