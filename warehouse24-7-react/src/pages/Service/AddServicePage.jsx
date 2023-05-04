import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AddServicePage = () => {
    const navigate = useNavigate()
    const [service, setService] = useState({
        name:'',
        description:'',
        price:''
    });

    const handleChange = (e) => {
        setService({
            ...service,
            [e.target.name]:e.target.value
        })
    }

    const addService = async() =>{
        try {
            const {data} = await axios.post('http://localhost:3022/service/add',service)
            alert(data.message)
            navigate('/dashboard/services')
        } catch (err) {
            console.error(err);
            alert(err.response?.data)
            throw new Error(err.response.data ||'Error adding service')
        }
    }

    return (

        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                <h1 className="h2">Add Service</h1>

                <button type="submit" onClick={()=>addService()} className="btn btn-success border border-dark me-5 bi bi-plus-circle"> Create Service</button>
                {/* <button type="submit" className="btn btn-warning border border-dark btn-block mb-4">Update User</button> */}

            </div>



            <form className='ps-5 ps-5 pt-4 me-5'>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" placeholder='Enter the name' maxLength="25" onChange={handleChange} name='name' />
                            <label className="form-label" htmlFor="form6Example1">Name</label>
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-3">
                    <input type="text" className="form-control" placeholder='Enter the description' maxLength="200" onChange={handleChange} name='description' />
                    <label className="form-label" htmlFor="form6Example6">Description</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="number" className="form-control" placeholder='Enter the price' onChange={handleChange} name='price' />
                    <label className="form-label" htmlFor="form6Example3">Price</label>
                </div>

            </form>

        </>

    )
}
