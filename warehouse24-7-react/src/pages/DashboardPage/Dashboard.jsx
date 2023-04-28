import React, { useState } from 'react'
import '../../css/bootstrap.min.css'
import '../DashboardPage/styleDashboard.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    const [open, setOpen]=useState(false)
    return (
        <>

            <header className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow sticky-top justify-content align-items-center">
                {/* <img className='ms-3' src={logo} width='35px' height='35px' /> */}
                <div className='navbar-nav navbar-brand col-md-3 col-lg-2 me-0 px-3' style={{backgroundColor: '#ffffff'}}>
                    <Link className="brush">WH 24/7</Link>
                </div>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" onClick={()=>setOpen(!open)}
                     aria-controls="sidebarMenu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div> */}
                
            </header>

            <div className="container-fluid">
                <div className="row">

                    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar ${open ? 'collapsing' :'collapse'}`} style={open?{height: 'auto'}:{'':''}}>
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
                                    <a className="nav-link active bi bi-house-door" aria-current="page" href="#">
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
                                    <a className="nav-link bi bi-person" href="#">
                                        <span data-feather="users" className="align-text-bottom"> </span>
                                        Users
                                    </a>
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
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            {/* <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar" className="align-text-bottom"></span>
                                    This week
                                </button>
                            </div> */}
                        </div>

                        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

                        {/* <h2>Section title</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>irrelevant</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </main>
                </div>
            </div>
        </>
    )
}
