import React, { useState, useEffect, useContext } from 'react'
import photo from '../../assets/property-1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { AuthContext } from '../..'

export const WarehousePage = () => {
    const { dataUser } = useContext(AuthContext)
    const [warehouses, setWarehouses] = useState([{}])
    const [access, setAccess] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getWarehouse = async () => {
        try {
            const { data } = await axios('http://localhost:3022/warehouse/get', { headers: headers })
            if (data.warehouses) {
                for (let i = 0; i < data.warehouses.length; i++) {
                    if (data.warehouses[i].photo) {
                        let img = await axios(`http://localhost:3022/warehouse/get-img/${data.warehouses[i].photo}`, { headers: headers })
                        console.log(img.request.responseURL);
                        data.warehouses[i].photo = img.request.responseURL
                    }
                    continue
                }
                setWarehouses(data.warehouses)
            }
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    const deleteWarehouse = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure to delete this warehouse?',
                icon: 'question',
                showConfirmButton: true,
                showDenyButton: true,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3022/warehouse/delete/${id}`, { headers: headers })
                    getWarehouse()
                    Swal.fire(`${data.message}`, '', 'success')
                } else {
                    Swal.fire('No worries!', '', 'success')
                }
            })
        } catch (err) {
            Swal.fire(err.response.data.message, '', 'error')
            console.error(err)
        }
    }

    const deallocate = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure to remove the client from this warehouse?',
                icon: 'question',
                showConfirmButton: true,
                showDenyButton: true,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.put(`http://localhost:3022/warehouse/deallocate/${id}`, {}, { headers: headers })
                    getWarehouse()
                    Swal.fire(`${data.message}`, '', 'success')
                } else {
                    Swal.fire('No worries!', '', 'success')
                }
            })
        } catch (err) { 
            Swal.fire(err.response.data.message, '', 'error')
            console.error(err)
        }
    }

    useEffect(() => {
        getWarehouse()
        const role = localStorage.getItem('role')
        if (role == 'ADMIN' || role == 'WORKER')
            setAccess(true)
        if (role == 'ADMIN')
            setIsAdmin(true)
    }, [])

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Warehouses</h1>
                <Link to='/dashboard/addWarehouse'>
                    <button className='btn btn-success border border-dark me-5 bi bi-plus-circle'> Add Warehouse</button>
                </Link>

            </div>

            <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-wrap mb-3 mt-3'>

                {/* AQUÍ IRAN LAS CARDS */}
                {
                    warehouses.map((warehouse, index) => {
                        return (
                            <div key={index} className="card ms-2 mt-2" style={{ width: '18rem' }}>
                                <img crossOrigin='anonymous' src={warehouse?.photo} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">{warehouse.type}</h5>
                                    <p className="card-text">{warehouse.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Size: {`${Number(warehouse.size?.area).toFixed(2)} m2`}</li>
                                    <li className="list-group-item">Services: {
                                        warehouse.services?.map((service) => {
                                            return (
                                                `${service.service.name}, `
                                            )
                                        })
                                    }</li>

                                    {access ?
                                        (
                                            <>
                                                <li className="list-group-item">State: {warehouse.state}</li>
                                                <li className="list-group-item">lessee: {warehouse?.lessee ? `${warehouse?.lessee?.names} ${warehouse?.lessee?.surnames}` : 'No assigned'}</li>
                                                <li className="list-group-item">lessee: {`Q. ${Number(warehouse.price).toFixed(2)}`}</li>
                                            </>
                                        )
                                        : ''
                                    }
                                </ul>
                                {
                                    access ?
                                        <div className="card-body text-center">
                                            {
                                                isAdmin ?
                                                    (
                                                        <>
                                                            <button className='btn btn-danger bi bi-trash3 ms-1 mb-1' onClick={() => deleteWarehouse(warehouse._id)}> Delete</button>
                                                            <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                                                        </>
                                                    ) : ''
                                            }
                                            {
                                                warehouse?.lessee ?
                                                    (
                                                        <button className='btn btn-danger' onClick={() => deallocate(warehouse._id)}> Deallocate</button>
                                                    ) :
                                                    (
                                                        <>
                                                            <Link to={`/dashboard/assign-user-warehouse/${warehouse._id}`}>
                                                                <button className='btn btn-primary ms-1'> Assign</button>
                                                            </Link>
                                                        </>
                                                    )
                                            }
                                            <Link to={`/dashboard/viewWarehouse/${warehouse._id}`}>
                                                <button className='btn btn-success ms-1'> More Info</button>
                                            </Link>
                                        </div> : ''
                                }
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
