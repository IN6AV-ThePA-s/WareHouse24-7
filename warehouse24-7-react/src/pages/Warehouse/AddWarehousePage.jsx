import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const AddWarehousePage = () => {
    const [services, setServices] = useState([{}])
    const [branches, setBranches] = useState([{}])
    const [service, setService] = useState([])
    const [viewService, setViewService] = useState([])
    const [img, setImg] = useState()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        type: '',
        description: '',
        size: {
            heigth: 0,
            length: 0,
            depth: 0
        },
        services: [],
        branch: '',
        price: 0
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlePhoto = (e) => {
        let formData = new FormData()
        formData.append('image', e.target.files[0])
        setImg(formData)
    }

    const handleChangeObject = (e) => {
        setForm({
            ...form,
            size: {
                ...form.size,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleChangeServices = (e) => {
        let data = {
            service: e.target.value
        }
        if(!service.includes(data.service)){
            setService([...service, data])
            setForm({
                ...form,
                services: service
            }) 
        }
    }

    const getServices = async () => {
        try {
            const { data } = await axios('http://localhost:3022/service/get', { headers: headers })
            setServices(data.services);
        } catch (err) {
            console.error(err);
        }
    }

    const getBranches = async () => {
        try {
            const { data } = await axios('http://localhost:3022/branch/get', { headers: headers })
            setBranches(data.branches)
        } catch (err) {
            console.error(err);
        }
    }

    const add = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3022/warehouse/add', form, { headers: headers })
            if (img) {
                await axios.put(
                    `http://localhost:3022/warehouse/upload-img/${data.warehouse._id}`,
                    img,
                    {
                        headers: { 'Authorization': localStorage.getItem('token'), 'Content-Type': 'multipart/form-data' }
                    }
                )
            }
            if (data.message) {
                Swal.fire({
                    title: data.message,
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                })

                navigate('/dashboard/warehouses')
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getServices()
        getBranches()
        console.log(form);
        console.log(service);
    }, [form,service])

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                <h1 className="h2">Add Warehouse</h1>
            </div>

            <Link to={'/dashboard/warehouse'}>
                <button type="submit" className="btn btn-danger m-2"> Cancel</button>
            </Link>
            <button className="btn btn-success m-2 bi bi-plus-circle" onClick={(e) => add(e)} > Create Warehouse</button>


            <form className='ps-5 ps-5 pt-4 me-5'>

                <div className="form-outline mb-3">
                    <input type="text" className="form-control" placeholder='Enter the type of warehouse' name='type' onChange={handleChange} />
                    <label className="form-label" htmlFor="form6Example3">Type</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="email" className="form-control" placeholder='Enter the decription' name='description' onChange={handleChange} />
                    <label className="form-label" htmlFor="form6Example4">Description</label>
                </div>

                <div className="row mb-4">
                    <label className="form-label" htmlFor="form6Example1">Size</label>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form6Example1" className="form-control" placeholder='Enter heigth' name='heigth' onChange={handleChangeObject} />
                            <label className="form-label" htmlFor="form6Example1">Heigth</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form6Example2" className="form-control" placeholder='Enter lenght' name='length' onChange={handleChangeObject} />
                            <label className="form-label" htmlFor="form6Example2">Length</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form6Example2" className="form-control" placeholder='Enter depth' name='depth' onChange={handleChangeObject} />
                            <label className="form-label" htmlFor="form6Example2">Depth</label>
                        </div>
                    </div>
                </div>
                <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form6Example2" className="form-control" placeholder='Enter price' name='price' onChange={handleChange} />
                            <label className="form-label" htmlFor="form6Example2">Price</label>
                        </div>
                </div>

                <div className="form-outline mb-3">
                    <select className="form-select select-input" name='services' onChange={handleChangeServices}>
                        <option defaultValue={null}>Select services</option>
                        {
                            services?.map(({ _id, name, price }, index) => {
                                return (
                                    <option key={index} value={_id}>{`${name}   |   Q.${Number(price).toFixed(2)}`}</option>
                                )
                            })
                        }
                    </select>
                    <label className="form-label" htmlFor="form6Example5">Services</label>
                </div>

                <div className="form-outline mb-3">
                    <select className='form-select select' name='branch' onChange={handleChange} >
                        <option defaultValue={null}>Select branch</option>
                        {
                            branches?.map(({ _id, name }, index) => {
                                return (
                                    <option key={index} value={`${_id}`}>{`${name}`}</option>
                                )
                            })
                        }
                    </select>
                    <label className="form-label" htmlFor="form6Example6">Branch</label>
                </div>

                <div className="form-outline mb-3">
                    <input className="form-control" type="file" id="formFile" name='photo' onChange={handlePhoto} />
                    <label htmlFor="formFile" className="form-label">Photo</label>
                </div>

            </form>

        </>
    )
}
