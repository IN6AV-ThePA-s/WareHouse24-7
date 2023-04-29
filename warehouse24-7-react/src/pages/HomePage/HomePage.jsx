import React from 'react'
import './homeStyle.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


export const HomePage = () => {

    return (
        <div className='body text-center text-bg-dark'>
            <div className="d-flex p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h3 className="h3247 float-md-start mb-0">WH24/7 <img src={logo} width='50rem' height='50rem'/></h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link className="nav-link fw-bold py-1 px-0" to='/'>Home</Link>
                            <Link className="nav-link fw-bold py-1 px-0" to="/about">About Us</Link>
                            <Link className="nav-link fw-bold py-1 px-0" href="#">Login</Link>
                        </nav>
                    </div>
                </header>

                <main className="px-3">
                    <h1 className='h1247'>Warehouse 24/7</h1>
                    <p className="p247 lead">
                        Find a perfect <strong>Warehouse</strong> to start your business.
                    </p>
                    <p className="lead">
                        <Link href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</Link>
                    </p>
                </main>

                <footer className="mt-auto text-white-50">
                    <p>Warehouse 24/7®</p>
                </footer>
            </div>
        </div>

    )
}