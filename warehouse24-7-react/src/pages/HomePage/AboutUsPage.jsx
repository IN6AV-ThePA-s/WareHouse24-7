import React from 'react'
import { NavbarHome } from '../../components/NavbarHome.jsx'
import './homeStyle.css'
import about from '../../assets/about.jpg'

export const AboutUsPage = () => {
    return (
        
            <div className='body text-center text-bg-dark'>
                <div className="d-flex p-3 mx-auto flex-column">
                    <NavbarHome />
                    <main className="px-3">
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6 text-center">
                                <h2 class="h1247 fw-bold pb-3 pt-5">WHO WE ARE
                                </h2>
                            </div>

                            <div class="row align-items-center">
                                <div class="col-lg-3 col-md-4 pt-5 pb-5">
                                    <img className='aboutimg rounded' src={about} width='650rem' height='800rem' />
                                </div>
                                <div class="col-lg-5 offset-lg-3 col-md-8">
                                    <h3 class="h2247 text-white fs-1 text-decoration-underline pb-3 pt-3">About Us</h3>
                                    <p class="p247 fs-5 text-white">
                                        En Warehouse 24/7, creemos que la administración de una empresa de arrendamiento de bodegas 
                                        no tiene que ser complicada. Es por eso que hemos creado un sistema diseñado para llevar el 
                                        control de estas de manera eficiente y práctica.
                                        <br/>
                                        Nuestro equipo está formado por expertos en tecnología y estamos comprometidos con la satisfacción
                                        del cliente y en el negocio de arrendamiento de bodegas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        
    )
}
