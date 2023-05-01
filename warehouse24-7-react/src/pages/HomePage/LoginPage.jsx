import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarHome } from '../../components/NavbarHome'
import './LoginStyle.css'
import user from '../../assets/user.png'
import { auto } from '@popperjs/core'

export const LoginPage = () => {
    return (
        <div className='bodyLogin conLogin text-center text-bg-dark'>
            <div className="d-flex p-3 flex-column"> {/* mx-auto */}

                <NavbarHome />



                <main className="px-3" style={{margin: 'auto'}}>
                    

                    

                    <h2 className="h2247 fs-1">Enter your credentials to continue.</h2>

                    

                    <div className='form-group d-flex justify-content-center'>
                        <div className="form__group field me-3">
                            <input type="text" className="form__field" placeholder="Username" name="username" maxLength='100' required />
                            <label htmlFor="name" className="form__label">Username</label>
                        </div>
                        
                        <div className="form__group field ms-3">
                            <input type="password" className="form__field" placeholder="Password" name="password" maxLength='100' required />
                            <label htmlFor="name" className="form__label">Password</label>
                        </div>
                    </div>

                    <div className="form-group mt-3">

                        <button className="btnLogin draw-border">Login</button>
                    </div>
                </main>
            </div>
        </div>
    )
}
