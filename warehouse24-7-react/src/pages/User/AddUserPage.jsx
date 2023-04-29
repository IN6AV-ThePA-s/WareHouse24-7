import React from 'react'
import './styleUser.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AddUserPage = () => {

    const [username, setUsername] = useState('');

    const handlePhone = (e) => {
        const value = e.target.value;
        if (value.length <= 8) {
            setUsername(value);
        }
    }

    return (

        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                <h1 className="h2">Add User</h1>

                <button type="submit" className="btn btn-success border border-dark me-5 bi bi-plus-circle"> Create User</button>
                {/* <button type="submit" className="btn btn-warning border border-dark btn-block mb-4">Update User</button> */}

            </div>



            <form className='ps-5 ps-5 pt-4 me-5'>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" placeholder='Enter your names' maxlength="25" />
                            <label className="form-label" htmlFor="form6Example1">Names</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" placeholder='Enter your surnames' maxlength="25" />
                            <label className="form-label" htmlFor="form6Example2">Surnames</label>
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-3">
                    <input type="number" className="form-control" placeholder='Enter your username' onChange={handlePhone} value={username} />
                    <label className="form-label" htmlFor="form6Example3">Phone</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="email" className="form-control" placeholder='Enter your username' maxlength="100" />
                    <label className="form-label" htmlFor="form6Example4">Email</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" className="form-control" placeholder='Enter your username' maxlength="100" />
                    <label className="form-label" htmlFor="form6Example5">Password</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="text" className="form-control" placeholder='Enter your username' maxlength="100" />
                    <label className="form-label" htmlFor="form6Example6">Username</label>
                </div>

                <div className="form-outline mb-3">
                    <input class="form-control" type="file" id="formFile" />
                    <label for="formFile" class="form-label">Photo</label>
                </div>

            </form>

        </>

    )
}
