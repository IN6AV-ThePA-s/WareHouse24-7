import React from 'react'
import photo from '../../assets/property-1.jpg'
import { Link } from 'react-router-dom'

export const WarehousePage = () => {
    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Warehouses</h1>
                <Link to='/dashboard/addUser'>
                    <button className='btn btn-success border border-dark me-5 bi bi-plus-circle'> Add Warehouse</button>
                </Link>

            </div>

            <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-wrap mb-3 mt-3'>

                {/* AQUÍ IRAN LAS CARDS */}

                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
                <div className="card ms-2 mt-2" style={{ width: '18rem' }}>
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <p className="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Size</li>
                        <li className="list-group-item">Services</li>
                        <li className="list-group-item">State</li>
                        <li className="list-group-item">lessee</li>
                    </ul>
                    <div className="card-body text-center">
                        <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                        <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}
