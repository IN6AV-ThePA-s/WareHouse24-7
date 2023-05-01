import React from 'react'
import logo from '../assets/logo.png'

export const NavbarHome = () => {
    return (
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="h3247 float-md-start mb-0">WH24/7 <img src={logo} width='50rem' height='50rem' /></h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">About Us</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Login</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
