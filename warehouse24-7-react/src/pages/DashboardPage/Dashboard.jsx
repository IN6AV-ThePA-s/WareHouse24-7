import React, { useState } from 'react'
import '../../css/bootstrap.min.css'
import '../DashboardPage/styleDashboard.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import photo from '../../assets/property-1.jpg'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
    const [open, setOpen] = useState(false)
    return (
        <>

            <header className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow sticky-top justify-content align-items-center">
                {/* <img className='ms-3' src={logo} width='35px' height='35px' /> */}
                <div className='navbar-nav navbar-brand col-md-3 col-lg-2 me-0 px-3' style={{ backgroundColor: '#ffffff' }}>
                    <Link className="brush">WH 24/7</Link>
                </div>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" onClick={() => setOpen(!open)}
                    aria-controls="sidebarMenu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </header>

            <div className="container-fluid">
                <div className="row">

                    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${open ? 'collapsing' : 'collapse'}`} style={open ? { height: 'auto' } : { '': '' }}>
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <h5
                                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
                                <span>Welcome:</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </a>
                            </h5>
                            <ul className="nav flex-column d-flex">
                                <li className="nav-item">
                                    <a className="nav-link bi bi-house-door" aria-current="page" href="#">
                                        <span className="align-text-bottom bi"> </span>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item me-5">
                                    <a className="nav-link bi bi-shop" href="#">
                                        <span data-feather="file" className="align-text-bottom"> </span>
                                        Branchs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bi bi-file-bar-graph" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"> </span>
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bi bi-person" to='users'>
                                        <span data-feather="users" className="align-text-bottom"> </span>
                                        Users
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bi bi-buildings" href="#">
                                        <span data-feather="users" className="align-text-bottom"> </span>
                                        Services
                                    </a>
                                </li>
                            </ul>

                            <h6
                                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                                <span>Saved reports</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </a>
                            </h6>
                            <ul className="nav h-50 d-flex flex-column justify-content-between mb-2">
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" className="align-text-bottom"></span>
                                            Current month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" className="align-text-bottom"></span>
                                            Last quarter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" className="align-text-bottom"></span>
                                            Social engagement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" className="align-text-bottom"></span>
                                            Year-end sale
                                        </a>
                                    </li>
                                </div>
                                <div className='fixed-bottom'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" className="align-text-bottom"></span>
                                            Log Out
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        <Outlet/>
                        {/* <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Users</h1>
                            <button className='btn btn-success me-5 bi bi-plus-circle'> Add User</button>
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
                        </div> */} 

                    </main>

                    {/* <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-wrap mb-3 mt-3'>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                        <div class="card ms-2 mt-2" style={{ width: '18rem' }}>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body">
                                
                                <p class="card-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Size</li>
                                <li class="list-group-item">Services</li>
                                <li class="list-group-item">State</li>
                                <li class="list-group-item">lessee</li>
                            </ul>
                            <div class="card-body text-center">
                                <button className='btn btn-danger bi bi-trash3 ms-1'> Delete</button>
                                <button className='btn btn-warning bi bi-pencil ms-1'> Update</button>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    )
}
