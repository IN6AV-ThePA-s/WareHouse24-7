import React from 'react'
import './styleUser.css'

export const AddUserPage = () => {
    return (

        <form className='ps-5 ps-5 pt-4 me-5'>

            <div className="row mb-4">
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="form6Example1" className="form-control" />
                        <label className="form-label" htmlFor="form6Example1">Names</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="form6Example2" className="form-control" />
                        <label className="form-label" htmlFor="form6Example2">Surnames</label>
                    </div>
                </div>
            </div>


            <div className="form-outline mb-3">
                <input type="number" id="form6Example3" className="form-control" />
                <label className="form-label" htmlFor="form6Example3">Phone</label>
            </div>


            <div className="form-outline mb-3">
                <input type="email" id="form6Example4" className="form-control" />
                <label className="form-label" htmlFor="form6Example4">Email</label>
            </div>


            <div className="form-outline mb-3">
                <input type="password" id="form6Example5" className="form-control" />
                <label className="form-label" htmlFor="form6Example5">Password</label>
            </div>


            <div className="form-outline mb-3">
                <input type="text" id="form6Example6" className="form-control" />
                <label className="form-label" htmlFor="form6Example6">Username</label>
            </div>

            <div className="form-outline mb-3">
                <input class="form-control" type="file" id="formFile"/>
                <label for="formFile" class="form-label">Photo</label>
            </div>


            <button type="submit" className="btn btn-success btn-block mb-4">Create User</button>
        </form>

    )
}
